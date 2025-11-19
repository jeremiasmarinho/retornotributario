#!/usr/bin/env node
/**
 * Vercel Build Script
 * Builds the project specifically for Vercel deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel build process...\n');

try {
  // Step 1: Build CSS
  console.log('📦 Step 1: Building Tailwind CSS...');
  execSync('npx tailwindcss -i ./src/styles/tailwind.css -o ./public/static/style.css --minify', {
    stdio: 'inherit',
    timeout: 60000
  });
  console.log('✅ CSS built successfully\n');

  // Step 2: Build with Vite
  console.log('⚡ Step 2: Building with Vite...');
  execSync('npx vite build', {
    stdio: 'inherit',
    timeout: 120000,
    env: { ...process.env, VERCEL: 'true' }
  });
  console.log('✅ Vite build completed\n');

  // Step 3: Ensure output directory
  console.log('📁 Step 3: Preparing output directory...');
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  console.log('✅ Output directory ready\n');

  // Step 4: Copy public files if needed
  console.log('📋 Step 4: Copying static files...');
  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    const copyDir = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const files = fs.readdirSync(src);
      files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };
    copyDir(publicDir, distDir);
  }
  console.log('✅ Static files copied\n');

  console.log('✨ Build completed successfully!\n');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}

#!/usr/bin/env node
// Vercel Build Script
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔨 Building project for Vercel...");

// Build com Vite (Tailwind integrado ao pipeline)
console.log("⚡ Building with Vite (PostCSS)...");
execSync("npm run build", { stdio: "inherit" });

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

// Copy public files to dist
console.log("📁 Copying public files...");
const publicDir = path.join(__dirname, "public");
const distDir = path.join(__dirname, "dist");

if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  files.forEach((file) => {
    const src = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    } else {
      fs.copyFileSync(src, dest);
    }
  });
}

console.log("✅ Build complete!");

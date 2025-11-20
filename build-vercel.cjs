#!/usr/bin/env node
/**
 * Vercel Build Script
 * Builds the project specifically for Vercel deployment
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting Vercel build process...\n");

try {
  // Step 1: Build CSS
  console.log("📦 Step 1: Building Tailwind CSS...");
  execSync(
    "npx tailwindcss -i ./src/styles/tailwind.css -o ./public/static/style.css --minify",
    {
      stdio: "inherit",
      timeout: 60000,
    }
  );
  console.log("✅ CSS built successfully\n");

  // Step 2: Build with Vite
  console.log("⚡ Step 2: Building with Vite...");
  execSync("npx vite build", {
    stdio: "inherit",
    timeout: 120000,
    env: { ...process.env, VERCEL: "true" },
  });
  console.log("✅ Vite build completed\n");

  // Step 3: Ensure api/ exists for Vercel
  console.log("📁 Step 3: Ensuring api/ directory exists...");
  const apiDir = path.join(__dirname, "api");
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
    console.log("✅ api/ directory created\n");
  } else {
    console.log("✅ api/ directory already exists\n");
  }

  console.log("✨ Build completed successfully!\n");
  process.exit(0);
} catch (error) {
  console.error("\n❌ Build failed:", error.message);
  process.exit(1);
}

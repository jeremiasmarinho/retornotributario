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
  // Build with Vite (Tailwind via PostCSS)
  console.log("⚡ Executando build com Vite (Tailwind via PostCSS)...");
  execSync("npm run build", {
    stdio: "inherit",
    timeout: 120000,
    env: { ...process.env, VERCEL: "true" },
  });
  console.log("✅ Vite build completed\n");

  // Step 3: Ensure api/ exists for Vercel
  console.log("📁 Garantindo diretório api/ para rotas serverless...");
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

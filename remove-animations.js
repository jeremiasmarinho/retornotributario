import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sectionsDir = path.join(__dirname, "src", "sections");

// Get all .tsx files
const files = fs.readdirSync(sectionsDir).filter((f) => f.endsWith(".tsx"));

files.forEach((file) => {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Remove data-animate attributes
  content = content.replace(/\s*data-animate="[^"]*"/g, "");

  // Remove data-parallax-depth attributes
  content = content.replace(/\s*data-parallax-depth="[^"]*"/g, "");

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✓ Fixed: ${file}`);
});

console.log("\n✅ All animation attributes removed!");

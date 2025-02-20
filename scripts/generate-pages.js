import fs from "fs";
import path from "path";

// Load participant names dynamically from `participants.json`
const participants = JSON.parse(fs.readFileSync("./participants.json", "utf-8"));

// Define all static routes that should generate an `.html` file
const routes = ["vision", "program", "maps", "blog", ...participants.map((id) => `participants/${id}`)];

// Read the base `index.html` template from `public/`
const template = fs.readFileSync("public/index.html", "utf-8");

// Create an `index.html` file for each route
routes.forEach((route) => {
  const dir = `dist/${route}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/index.html`, template);
  console.log(`✅ Created: ${dir}/index.html`);
});

console.log("🎉 Static pages generated successfully!");

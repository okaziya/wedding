import fs from "fs";
import path from "path";

// Function to wait until JS files exist
function waitForAssets() {
  const distAssetsPath = "dist/assets/";
  let retries = 5;

  return new Promise((resolve, reject) => {
    const checkFiles = setInterval(() => {
      if (fs.existsSync(distAssetsPath)) {
        const jsFiles = fs.readdirSync(distAssetsPath).filter((file) => file.endsWith(".js"));
        if (jsFiles.length > 0) {
          clearInterval(checkFiles);
          resolve(jsFiles);
        }
      }

      retries -= 1;
      if (retries <= 0) {
        clearInterval(checkFiles);
        reject(new Error("❌ No JavaScript file found in `dist/assets/`. Ensure `vite build` ran successfully."));
      }
    }, 1000);
  });
}

// Load participant names
const participants = JSON.parse(fs.readFileSync("./participants.json", "utf-8"));

// Define all static pages
const staticPages = ["vision", "program", "maps", "blog", ...participants.map((id) => `participants/${id}`)];

// Read template content
let template = fs.readFileSync("public/template.html", "utf-8");

waitForAssets()
  .then((jsFiles) => {
    // ✅ Pick the first JS file in `dist/assets/`
    const mainJsFile = jsFiles.find((file) => file.endsWith(".js"));

    if (!mainJsFile) {
      throw new Error("❌ No valid JavaScript file found.");
    }

    // ✅ Use `/wedding/assets/` to match GitHub Pages structure
    const scriptPath = `/wedding/assets/${mainJsFile}`;
    console.log(`🔹 Using script: ${scriptPath}`);

    // ✅ Replace the placeholder with the actual script path
    template = template.replace("%VITE_SCRIPT_PATH%", scriptPath);

    // ✅ Generate static pages
    staticPages.forEach((page) => {
      const dir = `dist/${page}`;
      fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(`${dir}/index.html`, template);
      console.log(`✅ Created: ${dir}/index.html`);
    });

    console.log("🎉 All static pages generated with correct script paths!");
  })
  .catch((error) => {
    console.error(error.message);
  });

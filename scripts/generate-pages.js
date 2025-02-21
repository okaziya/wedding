import fs from "fs";
import path from "path";

// Function to wait until CSS and JS assets exist
function waitForAssets() {
  const distAssetsPath = "dist/assets/";
  let retries = 5;

  return new Promise((resolve, reject) => {
    const checkFiles = setInterval(() => {
      if (fs.existsSync(distAssetsPath)) {
        const files = fs.readdirSync(distAssetsPath);
        const jsFiles = files.filter((file) => file.endsWith(".js"));
        const cssFiles = files.filter((file) => file.endsWith(".css"));

        if (jsFiles.length > 0 && cssFiles.length > 0) {
          clearInterval(checkFiles);
          resolve({ jsFiles, cssFiles });
        }
      }

      retries -= 1;
      if (retries <= 0) {
        clearInterval(checkFiles);
        reject(
          new Error("❌ No JavaScript or CSS file found in `dist/assets/`. Ensure `vite build` ran successfully.")
        );
      }
    }, 1000);
  });
}

// Load participant names
const participants = JSON.parse(fs.readFileSync("./participants.json", "utf-8"));

// Define all static pages
const staticPages = ["index", "vision", "program", "maps", "blog", ...participants.map((id) => `participants/${id}`)];

// Copy `script.js` from `public/` to `dist/`
fs.copyFileSync("public/script.js", "dist/script.js");

// Read `dist/index.html` (after build)
let template = fs.readFileSync("dist/index.html", "utf-8");

waitForAssets()
  .then(({ jsFiles, cssFiles }) => {
    const mainJsFile = jsFiles.find((file) => file.startsWith("main-"));
    const mainCssFile = cssFiles.find((file) => file.startsWith("main-"));

    if (!mainJsFile || !mainCssFile) {
      throw new Error("❌ No valid JavaScript or CSS file found.");
    }

    const scriptPath = `/wedding/assets/${mainJsFile}`;
    const cssPath = `/wedding/assets/${mainCssFile}`;
    console.log(`🔹 Using script: ${scriptPath}`);
    console.log(`🔹 Using CSS: ${cssPath}`);

    // ✅ Inject correct CSS path into `index.html`
    let updatedTemplate = template.replace("</head>", `  <link rel="stylesheet" href="${cssPath}">\n</head>`);

    staticPages.forEach((page) => {
      const dir = `dist/${page}`;
      fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(`${dir}/index.html`, updatedTemplate);
      console.log(`✅ Created: ${dir}/index.html`);
    });

    fs.writeFileSync("dist/script.js", `import "${scriptPath}";`);
    console.log("✅ Updated: dist/script.js");

    // ✅ Also update `dist/index.html` to include the correct stylesheet
    fs.writeFileSync("dist/index.html", updatedTemplate);
    console.log("✅ Updated: dist/index.html with CSS");

    console.log("🎉 All static pages generated with correct CSS & JS paths!");
  })
  .catch((error) => {
    console.error(error.message);
  });

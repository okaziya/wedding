import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  base: "/wedding/", // ✅ Ensures correct GitHub Pages paths
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "public/index.html"), // ✅ Only use `index.html`
        script: resolve(__dirname, "public/script.js"), // ✅ Ensure `script.js` is built
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

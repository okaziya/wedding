import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from "path";
import fs from "fs";

const participants = JSON.parse(fs.readFileSync("./participants.json", "utf-8"));

const staticRoutes = [
  "index", // Homepage
  "vision",
  "program",
  "maps",
  "blog",
  ...participants.map((id: string) => `participants/${id}`), // Dynamic participant pages
];

// Generate input entries for Rollup
const inputs = staticRoutes.reduce((acc, route) => {
  acc[route] = resolve(__dirname, "public/index.html"); // Uses `public/index.html` for every route
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/wedding/",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: inputs,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

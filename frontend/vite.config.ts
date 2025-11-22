// @ts-nocheck
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = loadEnv("", process.cwd());

const mergedEnv = {
  ...env,
  ...process.env,
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: Number(mergedEnv.FRONTEND_PORT),
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
  },
});


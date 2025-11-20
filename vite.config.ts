import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devServer({
      adapter,
      entry: "src/index.tsx",
    }),
  ],
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: false,
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/index.tsx",
      output: {
        format: "esm",
        entryFileNames: "index.js",
      },
    },
  },
});

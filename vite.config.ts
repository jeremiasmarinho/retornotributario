import build from "@hono/vite-build";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    build({
      entry: "src/index.tsx",
      emptyOutDir: true,
    }),
    devServer({
      adapter,
      entry: "src/index.tsx",
    }),
  ],
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: false,
  },
});

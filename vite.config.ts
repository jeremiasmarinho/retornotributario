import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";

const isVercel = process.env.VERCEL !== undefined;

export default defineConfig({
  plugins: [
    isVercel ? null : build(),
    devServer({
      adapter,
      entry: "src/index.tsx",
    }),
  ].filter(Boolean),
  build: {
    minify: "terser",
    sourcemap: false,
    rollupOptions: isVercel
      ? {
          input: "src/index.tsx",
          output: {
            dir: "dist",
            format: "esm",
          },
        }
      : undefined,
  },
});

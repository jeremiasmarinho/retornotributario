import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";

const isBuildForCloudflare = process.env.VERCEL === undefined;

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: "src/index.tsx",
    }),
  ],
  build: {
    minify: "terser",
    sourcemap: false,
  },
});

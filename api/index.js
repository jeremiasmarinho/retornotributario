import { serve } from "@hono/node-server";
import app from "../dist/index.js";

// Export the app for Vercel
export default app;

// For local development/testing
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  serve(
    {
      fetch: app.fetch,
      port: parseInt(port),
    },
    (info) => {
      console.log(`🚀 Server running at http://localhost:${info.port}`);
    }
  );
}

import { serve } from "@hono/node-server";
import app from "../dist/index.js";

// Export the handler for Vercel serverless
export default app.fetch;

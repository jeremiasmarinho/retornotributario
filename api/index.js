import app from "../dist/_worker.js";

// Vercel expects a function (req, res). Wrap the Hono app (Cloudflare-style) so
// it can be used as a Node serverless function.
export default async function handler(req, res) {
  try {
    // Build absolute URL from incoming request
    const proto =
      req.headers["x-forwarded-proto"] ||
      req.headers["x-forwarded-protocol"] ||
      "https";
    const host =
      req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = `${proto}://${host}${req.url}`;

    // Build Headers
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (Array.isArray(v)) v.forEach((val) => headers.append(k, String(val)));
      else if (v != null) headers.set(k, String(v));
    }

    // Read body (if any) into a buffer for the Request
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      // Vercel's req is a Node IncomingMessage stream; collect it
      const chunks = [];
      for await (const chunk of req)
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
      if (chunks.length) body = Buffer.concat(chunks);
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    // Call the Hono app exported in dist/_worker.js
    // The app can be:
    // 1. A Hono instance with .fetch(request, env)
    // 2. A default export that is callable
    let response;

    if (app && typeof app.fetch === "function") {
      // Standard Hono app with fetch method
      response = await app.fetch(request, { env: process.env });
    } else if (typeof app === "function") {
      // Fallback: app is directly callable
      response = await app(request);
    } else {
      // Last resort: try to call default export as function
      console.error("App is neither a Hono instance nor a function:", typeof app);
      throw new Error("Invalid app export");
    }

    // Forward status and headers
    res.statusCode = response.status;
    for (const [k, v] of response.headers) {
      res.setHeader(k, v);
    }

    // Stream or send the body
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
        }
      } catch (streamErr) {
        console.error("Stream error:", streamErr.message);
        res.write(JSON.stringify({ error: "Stream error" }));
      }
    }
    res.end();
  } catch (err) {
    console.error("Handler error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Internal Server Error",
        message: err.message,
        code: "HANDLER_ERROR",
      })
    );
  }
}

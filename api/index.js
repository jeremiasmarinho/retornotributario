import app from "../dist/_worker.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

// MIME type mapping
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || "application/octet-stream";
}

// Serve static files from public/
async function serveStatic(pathname) {
  try {
    let filePath = path.join(publicDir, pathname);

    // If it's a directory or root, serve index.html
    if (pathname === "/" || pathname === "") {
      filePath = path.join(publicDir, "index.html");
    }

    // Security: prevent directory traversal
    if (!path.resolve(filePath).startsWith(path.resolve(publicDir))) {
      return null;
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      // Try index.html in the directory
      filePath = path.join(filePath, "index.html");
      if (!fs.existsSync(filePath)) {
        return null;
      }
    }

    const content = fs.readFileSync(filePath);
    const mimeType = getMimeType(filePath);

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Length": content.length.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Static serve error:", err.message);
    return null;
  }
}

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
    const pathname = new URL(url).pathname;

    // Try to serve static files first
    const staticResponse = await serveStatic(pathname);
    if (staticResponse) {
      res.statusCode = staticResponse.status;
      for (const [k, v] of staticResponse.headers) {
        res.setHeader(k, v);
      }
      const buf = await staticResponse.arrayBuffer();
      res.end(Buffer.from(buf));
      return;
    }

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
    let response;

    if (app && typeof app.fetch === "function") {
      // Standard Hono app with fetch method
      response = await app.fetch(request, { env: process.env });
    } else if (typeof app === "function") {
      // Fallback: app is directly callable
      response = await app(request);
    } else {
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

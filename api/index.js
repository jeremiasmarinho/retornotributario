import app from "../dist/_worker.js";

// Vercel expects a function (req, res). Wrap the Hono app (Cloudflare-style) so
// it can be used as a Node serverless function.
export default async function handler(req, res) {
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
  // The app implements a fetch(request, env?) API like Cloudflare Workers
  let response;
  try {
    // Try calling with only the Request first
    response = (await app.fetch)
      ? await app.fetch(request)
      : await app(request);
  } catch (err) {
    // If app.fetch requires env/execution context, pass process.env as env
    response = await app.fetch(request, { env: process.env }).catch((e) => {
      // Re-throw if still failing
      throw e;
    });
  }

  // Forward status and headers
  res.statusCode = response.status;
  for (const [k, v] of response.headers) {
    // Node/res.setHeader expects string or number; if multiple values, join with comma
    res.setHeader(k, v);
  }

  // Stream or send the body
  const reader = response.body?.getReader?.();
  if (!reader) {
    // No stream reader available (maybe empty body)
    const buf = await response.arrayBuffer();
    res.end(Buffer.from(buf));
    return;
  }

  // Stream the response body to res
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (streamErr) {
    // Fallback: send full body
    const buf = await response.arrayBuffer();
    res.end(Buffer.from(buf));
  }
}

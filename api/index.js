import app from "../dist/index.js";

export default async (req, res) => {
  try {
    const response = await app.fetch(
      new Request(req.url, {
        method: req.method,
        headers: req.headers,
        body:
          req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
      })
    );

    // Set response status
    res.status(response.status);

    // Set response headers
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    // Send response body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).send("Internal Server Error");
  }
};

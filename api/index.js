import app from "../dist/index.js";

export default async (req) => {
  try {
    return await app.fetch(req);
  } catch (error) {
    console.error("Handler error:", error);
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Error</title>
</head>
<body>
  <h1>Error</h1>
  <p>${error.message}</p>
  <p>Check Vercel logs for details</p>
</body>
</html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
};

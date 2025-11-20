// Minimal test handler for debugging Vercel deployment
export default async (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(`
TEST RESPONSE - Vercel Handler Working!
================================

Request Info:
- Method: ${req.method}
- URL: ${req.url}
- Headers: ${JSON.stringify(req.headers, null, 2)}

Environment:
- NODE_ENV: ${process.env.NODE_ENV}
- VERCEL: ${process.env.VERCEL}
- Timestamp: ${new Date().toISOString()}

If you see this, the handler is being invoked correctly!
  `);
};

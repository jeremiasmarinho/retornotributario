import { describe, it, expect, beforeAll } from "vitest";
import app from "../dist/index.js";

describe("API Handler", () => {
  it("should be a valid Hono app", () => {
    expect(app).toBeDefined();
    expect(app.fetch).toBeDefined();
    expect(typeof app.fetch).toBe("function");
  });

  it("should handle GET / request", async () => {
    const request = new Request("http://localhost:3000/", {
      method: "GET",
    });

    const response = await app.fetch(request);

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/html");
  });

  it("should return HTML content", async () => {
    const request = new Request("http://localhost:3000/", {
      method: "GET",
    });

    const response = await app.fetch(request);
    const html = await response.text();

    expect(html).toContain("<html");
    expect(html.length).toBeGreaterThan(0);
  });

  it("should handle 404 for non-existent routes", async () => {
    const request = new Request("http://localhost:3000/non-existent-route", {
      method: "GET",
    });

    const response = await app.fetch(request);

    expect(response.status).toBe(404);
  });

  it("should handle GET and HEAD requests", async () => {
    const methods = ["GET", "HEAD"];

    for (const method of methods) {
      const request = new Request("http://localhost:3000/", {
        method,
      });

      const response = await app.fetch(request);

      expect(response).toBeDefined();
      expect(response.status).toBe(200);
    }
  });
});

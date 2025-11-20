import { describe, it, expect } from "vitest";
import handler from "./index.js";

describe("Vercel Handler", () => {
  it("should export a fetch function", () => {
    expect(handler).toBeDefined();
    expect(typeof handler).toBe("function");
  });

  it("should be able to handle Vercel requests", async () => {
    // Simulating a Vercel request
    const mockRequest = new Request("http://localhost:3000/", {
      method: "GET",
    });

    const response = await handler(mockRequest);

    expect(response).toBeDefined();
    expect(response instanceof Response).toBe(true);
    expect(response.status).toBe(200);
  });

  it("should serve HTML on root path", async () => {
    const mockRequest = new Request("http://localhost:3000/", {
      method: "GET",
    });

    const response = await handler(mockRequest);
    const html = await response.text();

    expect(html).toContain("<!DOCTYPE");
    expect(html).toContain("</html>");
  });
});

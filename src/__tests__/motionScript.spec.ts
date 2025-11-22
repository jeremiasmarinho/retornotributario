import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const visibleRect = {
  top: 0,
  bottom: 200,
  left: 0,
  right: 200,
  width: 200,
  height: 200,
  x: 0,
  y: 0,
  toJSON: () => ({}),
};

const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
const originalMatchMedia = globalThis.matchMedia;

beforeAll(() => {
  vi.stubGlobal("alert", () => undefined);
});

describe("script de interações", () => {
  beforeEach(() => {
    vi.resetModules();
    document.body.innerHTML = `<section data-motion="fade-up"></section>`;
    document.head.innerHTML = "";

    Element.prototype.getBoundingClientRect = () => visibleRect;

    globalThis.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    });
  });

  it("marca elementos visíveis como ativos ao iniciar", async () => {
    // @ts-expect-error script público sem tipagem
    await import("../../public/static/script.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));

    await new Promise((resolve) => setTimeout(resolve, 0));

    const motionElement = document.querySelector("[data-motion]");
    expect(document.body.classList.contains("motion-ready")).toBe(true);
    expect(motionElement?.classList.contains("motion-active")).toBe(true);
  });
});

afterAll(() => {
  Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  if (originalMatchMedia) {
    globalThis.matchMedia = originalMatchMedia;
  } else {
    // @ts-ignore limpar stub se não houver original
    delete globalThis.matchMedia;
  }
  vi.unstubAllGlobals();
});

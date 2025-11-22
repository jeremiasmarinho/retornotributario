import "@testing-library/jest-dom";
import { vi } from "vitest";

if (!window.matchMedia) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }));
}

if (!window.requestAnimationFrame) {
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) =>
    setTimeout(() => callback(performance.now()), 0)
  );
}

if (!globalThis.IntersectionObserver) {
  class IntersectionObserverStub {
    private readonly callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    observe(element: Element) {
      const rect = element.getBoundingClientRect();
      this.callback(
        [
          {
            isIntersecting: true,
            target: element,
            intersectionRatio: 1,
            time: 0,
            boundingClientRect: rect,
            intersectionRect: rect,
            rootBounds: rect,
          } as IntersectionObserverEntry,
        ],
        this as unknown as IntersectionObserver
      );
    }

    unobserve() {
      /* noop */
    }

    disconnect() {
      /* noop */
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);
}

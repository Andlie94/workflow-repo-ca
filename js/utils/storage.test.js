import { describe, expect, it, beforeEach, vi } from "vitest";
import { getUsername } from "./storage.js";

beforeEach(() => {
  globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };

  Object.values(globalThis.localStorage).forEach((fn) => fn.mockReset());
});

describe("getUsername", () => {
  it("return username from storage", () => {
    globalThis.localStorage.getItem.mockReturnValue(
      JSON.stringify({ name: "Andre Strøm" }),
    );
    expect(getUsername()).toBe("Andre Strøm");
  });

  it("should return null if no user is stored", () => {
    globalThis.localStorage.getItem.mockReturnValue(null);
    expect(getUsername()).toBe(null);
  });
});

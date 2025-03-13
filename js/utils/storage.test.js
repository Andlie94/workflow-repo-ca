import { describe, expect, it, beforeEach, vi } from "vitest";
import { getUsername } from "./storage.js";

beforeEach(() => {
  window.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };

  Object.values(localStorage).forEach((fn) => fn.mockReset());
});

describe("getUsername", () => {
  it("return username from storage", () => {
    localStorage.getItem.mockReturnValue(
      JSON.stringify({ name: "Andre Strøm" }),
    );
    expect(getUsername()).toBe("Andre Strøm");
  });

  it("should return null if no user is stored", () => {
    localStorage.getItem.mockReturnValue(null);
    expect(getUsername()).toBe(null);
  });
});

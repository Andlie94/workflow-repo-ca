import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("should return true for active paths", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/contact", "/contact")).toBe(true);
  });

  it("should return false for non-active paths", () => {
    expect(isActivePath("/about", "/")).toBe(false);
    expect(isActivePath("/contact", "/")).toBe(false);
  });

  it("should return true for root path with current path", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return false for root path with non-current path", () => {
    expect(isActivePath("/", "/about")).toBe(false);
    expect(isActivePath("/", "/contact")).toBe(false);
  });
});

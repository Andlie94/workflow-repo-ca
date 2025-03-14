import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("should return true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/contact", "/contact")).toBe(true);
  });

  it("should return true for root path (/) when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    expect(isActivePath("/dashboard", "/dashboard/settings")).toBe(true);
    expect(isActivePath("/profile", "/profile/edit")).toBe(true);
  });

  it("should return false when paths don't match", () => {
    expect(isActivePath("/about", "/")).toBe(false);
    expect(isActivePath("/contact", "/")).toBe(false);
    expect(isActivePath("/dashboard", "/profile")).toBe(false);
  });
});

import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/home", "/home")).toBe(true);
  });

  it('Returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    expect(isActivePath("/home/about", "/home")).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    expect(isActivePath("/home", "/about")).toBe(false);
  });
});

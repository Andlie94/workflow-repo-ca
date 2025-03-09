import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "./getUserName";

beforeEach(() => {
  globalThis.localStorage = {
    getItem: (key) => {
      return key === "username" ? globalThis.localStorage.username : null;
    },
    setItem: (key, value) => {
      if (key === "username") {
        globalThis.localStorage.username = value;
      }
    },
    removeItem: (key) => {
      if (key === "username") {
        globalThis.localStorage.username = null;
      }
    },
    clear: () => {
      globalThis.localStorage.username = null;
    },
  };
});

afterEach(() => {
  globalThis.localStorage.clear();
});

describe("getUserName", () => {
  it("returns the username from localStorage", () => {
    localStorage.setItem("username", "Andre Strøm");

    expect(getUserName()).toBe("Andre Strøm");
  });

  it('returns "guest" when there is nothing in localStorage', () => {
    localStorage.removeItem("username");

    expect(getUserName()).toBe("guest");
  });
});

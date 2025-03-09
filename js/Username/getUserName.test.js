import { expect, test, beforeEach, afterEach } from "vitest";
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

test("returns the username from localStorage", () => {
  localStorage.setItem("username", "Andre Strøm");
  expect(getUserName()).toBe("Andre Strøm");
});

test('returns "guest" when there is nothing in localStorage', () => {
  localStorage.removeItem("username");
  expect(getUserName()).toBe("guest");
});

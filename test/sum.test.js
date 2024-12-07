// sum.test.js
import { expect, test } from "vitest";
import { sum } from "../src/Utils/api.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

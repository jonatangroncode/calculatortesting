import { createCalculator } from "../lib/calculator";
import { test, expect } from "vitest";

test("adderar två tal", () => {
  const calculator = createCalculator();
  expect(calculator.add(2, 2)).toBe(4);
});

import { createCalculator } from "../lib/calculator";
import { test, expect } from "vitest";

test("adderar två tal", () => {
  const calculator = createCalculator();
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtraherar två tal", () => {
  const calculator = createCalculator();
  expect(calculator.subtraction(5, 2)).toBe(3);
});

test("multiplicerar två tal", () => {
  const calculator = createCalculator();
  expect(calculator.multiplication(2, 3)).toBe(6);
});

test("dividerar två tal", () => {
  const calculator = createCalculator();
  expect(calculator.division(6, 2)).toBe(3);
});

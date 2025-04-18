import { createCalculator } from "../lib/calculator";
import { test, expect, describe, beforeEach } from "vitest";

describe("calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = createCalculator();
  });

  test("adderar två tal", () => {
    expect(calculator.addition(2, 2)).toBe(4);
  });

  test("subtraherar två tal", () => {
    expect(calculator.subtraction(5, 2)).toBe(3);
  });

  test("multiplicerar två tal", () => {
    expect(calculator.multiplication(2, 3)).toBe(6);
  });

  test("dividerar två tal", () => {
    expect(calculator.division(6, 2)).toBe(3);
  });

  test("Ger fel om vi dividerar med 0", () => {
    expect(() => calculator.division(5, 0)).toThrow(
      "Går inte att dividera med 0"
    );
  });
});

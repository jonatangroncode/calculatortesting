export const createCalculator = () => ({
  add: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b,
});

console.log(createCalculator().add(1, 2));

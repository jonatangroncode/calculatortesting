export const createCalculator = () => ({
  add: (a, b) => a + b,
});

console.log(createCalculator().add(1, 2));

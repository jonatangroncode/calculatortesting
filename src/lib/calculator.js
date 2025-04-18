export const createCalculator = () => ({
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) {
      throw new Error("Går inte att dividera med 0");
    }
    return a / b;
  },
});

console.log(createCalculator().addition(1, 2));

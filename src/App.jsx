import "./App.css";
import { createCalculator } from "./lib/calculator";

function App() {
  const calculator = createCalculator();
  console.log(calculator.add(1, 2));
  return <></>;
}

export default App;

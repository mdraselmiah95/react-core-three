import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseNumber = () => setCount(count + 1);
  const decreaseNumber = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseNumber}>INCREASE</button>
      <button onClick={decreaseNumber}>DECREASE</button>
    </div>
  );
}

export default App;

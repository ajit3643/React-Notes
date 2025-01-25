import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  // Phase I: Component is mounted every time

  // useEffect(() => {
  //   alert("Component is mounted");
  // });

  // Phase II: Component is mounted only once

  // useEffect(() => {
  //   alert("Component is mounted");
  // }, []);

  // Phase III: Component is mounted and updated every time

  // useEffect(() => {
  //   alert("Component is mounted and updated");
  // }, [count]);

  // Phase IV: Component is mounted only once and updated every time multiple states are used

  useEffect(() => {
    alert("Component is mounted and updated");
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Using the Effect Hook</h1>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;

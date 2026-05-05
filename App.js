import React, { useState, useEffect } from "react";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function CounterHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>Timer: {seconds} seconds</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Sawan" />
      <CounterHook />
      <Timer />
    </div>
  );
}

export default App;

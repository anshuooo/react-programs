//State Update Race Conditions: Implement a counter that increases by 1 every second, but 
//ensure there are no race conditions in state updates when a "Reset" button is pressed
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Counter state
  const [isRunning, setIsRunning] = useState(true); // Controls whether the counter is active

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        // Use functional update to avoid race conditions
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      // Cleanup the interval on component unmount or when isRunning changes
      return () => clearInterval(interval);
    }
  }, [isRunning]); // Dependency array ensures cleanup when isRunning changes

  // Handle reset logic
  const handleReset = () => {
    setIsRunning(false); // Stop the counter
    setCount(0); // Reset the count to 0
    setIsRunning(true); // Restart the counter
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

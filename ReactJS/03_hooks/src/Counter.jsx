import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter >= 10 ? counter : counter + 1);
  };

  const removeValue = () => {
    setCounter(counter <= 0 ? counter : counter - 1);
  };

  return (
    <div>
      <h1>Chai Aur Hooks</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <br />

      <footer>{counter}</footer>
    </div>
  );
}

export default Counter;

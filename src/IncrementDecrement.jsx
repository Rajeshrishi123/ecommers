import React, { useState } from "react";

const IncrementDecrement = () => {
  const [increment, setIncrement] = useState(0);
  

  return (
    <div>
      <h1>{increment}</h1>
      <button onClick={() => setIncrement(increment + 5)}>Increment</button>
      <button onClick={() => setIncrement(increment - 1)}>Decrement</button>
      <button onClick={() => setIncrement(0)}>Reset</button>
    </div>
  );
}

export default IncrementDecrement;

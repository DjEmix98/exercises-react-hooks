import { useState } from "react";
import "bootstrap";
export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="exercise__container">
      <section className="mb-4">
        <h4 className="exercise__sub-title mb-3">Exercise 1 - Counter</h4>
        <button onClick={() => setCounter(counter + 1)}>+</button> 
        <span className="pe-2 ps-2">{counter}</span>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </section>
    </div>
  );
}

import { useState } from "react";
import "../assets/counter.css";
import "bootstrap";
export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter__container">
      <section>
        <h4 className="counter__title mb-3">Exercise 1 - Counter</h4>
        <button onClick={() => setCounter(counter + 1)}>+</button> {counter}{" "}
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </section>
    </div>
  );
}

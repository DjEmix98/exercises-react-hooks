import { useState } from "react";

export function Coordinate() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  window.addEventListener("mousemove", (event) => handleMouseMove(event));
  return (
    <div className="exercise__container mt-4">
      <section>
        <h4 className="counter__title mb-3">Exercise 3 - Coordinates</h4>
        <p>
          {state.x} - {state.y}
        </p>
      </section>
    </div>
  );
}

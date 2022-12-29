import "./App.css";
import { Counter } from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <h1 className="App__title">React Hooks Exercises</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;

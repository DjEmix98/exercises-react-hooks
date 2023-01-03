import "./App.css";
import { Counter } from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import { Coordinate } from "./components/Coordinate";

function App() {
  return (
    <div className="App container">
      <h1 className="App__title">React Hooks Exercises</h1>
      <Counter></Counter>
      <Form></Form>
      <Coordinate></Coordinate>
    </div>
  );
}

export default App;

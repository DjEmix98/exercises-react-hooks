import "./App.css";
import { Counter } from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form";
import { Coordinate } from "./components/Coordinate";
import { AvatarContext } from "./hooks/useAvatarContext";
import { Avatar } from "./components/Avatar";
import userImg from "./assets/img/userImage.png";
function App() {
  const userInfo = {
    user: "Emmanuel",
    userIcon: userImg,
  };
  return (
    <div className="App container">
      <h1 className="App__title">React Hooks Exercises</h1>
      <Counter></Counter>
      <Form></Form>
      <Coordinate></Coordinate>
      <AvatarContext.Provider value={userInfo}>
        <Avatar></Avatar>
      </AvatarContext.Provider>
    </div>
  );
}

export default App;

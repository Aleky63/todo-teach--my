import Todo from "./components/Todo";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <Todo />
      <Greeting name="Alla" />
      <Greeting name="Vasy" />
      <Greeting name="Anna" />
    </>
  );
};

export default App;

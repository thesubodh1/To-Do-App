import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import EmptyScreen from "./components/EmptyScreen";
import AddButton from "./components/AddButton";

function App() {
  const [task,setTask] = useState([]);
  return (
    <>
      <Header />
      {task.length == 0 ? <EmptyScreen /> : "New Tasks"}
      <AddButton />
    </>
  );
}

export default App;

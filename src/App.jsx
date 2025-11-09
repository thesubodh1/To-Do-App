import { useState,useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import EmptyScreen from "./components/EmptyScreen";
import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import AddNewTask from "./components/AddNewTask";

function App() {
  const modal = useRef();
  const [task,setTask] = useState([]);

  function handleAddNewTask(){
    modal.current.open();
  }
  return (
    <>
      <Modal ref={modal}><AddNewTask/></Modal>
      <Header />
      {task.length == 0 ? <EmptyScreen /> : "New Tasks"}
      <AddButton onAdd={handleAddNewTask}/>
    </>
  );
}

export default App;

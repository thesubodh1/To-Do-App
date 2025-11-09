import { useState, useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import EmptyScreen from "./components/EmptyScreen";
import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import AddNewTask from "./components/AddNewTask";

function App() {
  const modal = useRef();
  const [task, setTask] = useState([]);

  function handleAddNewTask() {
    modal.current.open();
  }

  function handleCancel() {
    modal.current.close();
  }

  function handleConfirm(newTask){
      setTask((previousTasks) => {
          return [...previousTasks,newTask]
      })
  }

  console.log(task)
  return (
    <main>
      <Modal ref={modal}>
        <AddNewTask onCancel={handleCancel} onConfirm={handleConfirm}/>
      </Modal>
      <Header />
      <EmptyScreen />
      <AddButton onAdd={handleAddNewTask} />
    </main>
  );
}

export default App;

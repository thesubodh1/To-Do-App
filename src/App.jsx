import { useState, useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import EmptyScreen from "./components/EmptyScreen";
import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import AddNewTask from "./components/AddNewTask";
import TaskScreen from "./components/TaskScreen";

function App() {
  const modal = useRef();
  const [task, setTask] = useState([]);
  console.log(task);
  // console.log(task.find((task) =>task.id == 0.9067075422915349).title)

  function handleAddNewTask() {
    modal.current.open();
  }

  function handleCancel() {
    modal.current.close();
  }

  function handleConfirm(newTask) {
    setTask((previousTasks) => {
      return [...previousTasks, newTask];
    });
    modal.current.close();
  }

  function handleDeleteTask(id) {
    setTask((previousTasks) => {
      return previousTasks.filter((tasks) => tasks.id !== id);
    });
  }

  function handleEdit(taskId, taskTitle) {
    setTask((previousTasks) => {
      return previousTasks.map((task) =>
        task.id === taskId ? { ...task, title: taskTitle } : task
      );
    });
  }

  let content = <EmptyScreen />;

  if (task.length !== 0) {
    content = (
      <TaskScreen
        allTasks={task}
        onDelete={handleDeleteTask}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <main>
      <Modal ref={modal}>
        <AddNewTask onCancel={handleCancel} onConfirm={handleConfirm} />
      </Modal>
      <Header />
      {content}
      <AddButton onAdd={handleAddNewTask} />
    </main>
  );
}

export default App;

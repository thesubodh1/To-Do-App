import { useRef } from "react";

export default function AddNewTask({ onCancel, onConfirm }) {
  const title = useRef();

  function handleAddTask() {
    const taskTitle = title.current.value;
    const taskId = Math.random();

    onConfirm({
      title: taskTitle,
      id: taskId,
    });
  }
  return (
    <div className="new-task">
      <h2 className="heading-secondary">New Task</h2>
      <input type="text" ref={title} />
      <div className="task-btns">
        <button className="btn cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn apply" onClick={handleAddTask}>
          Apply
        </button>
      </div>
    </div>
  );
}

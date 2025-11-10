import { useState } from "react";
import Task from "./Task";

export default function TaskScreen({ allTasks, onDelete, onEdit }) {
  return (
    <ul className="task-lists">
      {allTasks.map((task) => (
        <Task task={task} key={task.id} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </ul>
  );
}

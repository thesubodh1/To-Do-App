import { useState } from "react";

export default function TaskScreen({allTasks,onDelete}){
    return(
        <ul className="task-lists">
            {allTasks.map((task) => (
                <li key={task.id} className="tasks">
                    <span className="tasks-btn">{task.title}</span>
                    <div className="action-btn">
                        <button className="icon-btn" onClick={() => onDelete(task.id)}><ion-icon name="trash-outline" className="icon"></ion-icon></button>
                        <button className="icon-btn" onClick={() => onDelete(task.id)}><ion-icon name="create-outline" className="icon"></ion-icon></button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
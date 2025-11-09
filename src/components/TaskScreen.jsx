export default function TaskScreen({allTasks}){
    return(
        <ul className="task-lists">
            {allTasks.map((task) => (
                <li key={task.id} className="tasks">
                    <button className="tasks-btn">{task.title}</button>
                </li>
            ))}
        </ul>
    );
}
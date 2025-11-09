export default function TaskScreen({allTasks}){
    return(
        <ul className="task-lists">
            {allTasks.map((task) => (
                <li key={task.id}>
                    <button>{task.title}</button>
                </li>
            ))}
        </ul>
    );
}
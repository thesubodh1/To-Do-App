export default function AddNewTask(){
    return(
        <div className="new-task">
            <h2 className="heading-secondary">New Task</h2>
            <input type="text" />

            <div className="task-btns">
                <button>Cancel</button>
                <button>Apply</button>
            </div>
        </div>
    );
}
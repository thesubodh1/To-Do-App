import { useState } from "react";

export default function Task({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(task.title);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleChange(event) {
    setEditingTitle(event.target.value);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditingTitle(task.title);
  }

  function handleSave() {
    if (editingTitle.trim()) {
      onEdit(task.id, editingTitle);
      setIsEditing(false);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSave();
    } else if (event.key === "Escape") {
      handleCancel();
    }
  }
  return (
    <li className="tasks">
      {!isEditing ? (
        <span className="tasks-btn">{task.title}</span>
      ) : (
        <div className="edit-container">
          <input type="text" value={editingTitle} onChange={handleChange} onKeyDown={handleKeyPress} autoFocus/>
          <div className="edit-action-btn">
            <button onClick={handleSave} className="edit-btn btn--save">Save</button>
            <button onClick={handleCancel} className="edit-btn btn--cancel">Cancel</button>
          </div>
        </div>
      )}
      <div className="action-btn">
        <button className="icon-btn" onClick={() => onDelete(task.id)}>
          <ion-icon name="trash-outline" className="icon"></ion-icon>
        </button>
        <button
          className="icon-btn"
          onClick={() => handleEdit(task.id)}
          disabled={isEditing}
        >
          <ion-icon name="create-outline" className="icon"></ion-icon>
        </button>
      </div>
    </li>
  );
}

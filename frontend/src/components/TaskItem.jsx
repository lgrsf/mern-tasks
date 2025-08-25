import React, { useState } from "react";

function TaskItem({ task, updateTask, removeTask }) {
    const [title, setTitle] = useState(task.title);

    const handleChangeTitle = async () => {
        if (title.trim() === "") return;
        await updateTask(task._id, "title", title);
    };

    const handleChangeStatus = async (e) => {
        await updateTask(task._id, "status", e.target.value);
    };

    const handleChangeDueDate = async (e) => {
        await updateTask(task._id, "dueDate", e.target.value);
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px", display: "flex", flexDirection: "column" }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleChangeTitle}
                style={{ fontSize: "16px", marginBottom: "5px" }}
            />

            <select value={task.status} onChange={handleChangeStatus} style={{ marginBottom: "5px" }}>
                <option value="pendiente">Pendiente</option>
                <option value="en curso">En curso</option>
                <option value="completada">Completada</option>
            </select>

            <input
                type="datetime-local"
                value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : ""}
                onChange={handleChangeDueDate}
                style={{ marginBottom: "5px" }}
            />

            <button onClick={() => removeTask(task._id)} style={{ backgroundColor: "#e53935", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer" }}>
                Eliminar
            </button>
        </div>
    );
}

export default TaskItem;

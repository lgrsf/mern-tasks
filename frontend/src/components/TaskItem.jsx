import React, { useState } from "react";

function TaskItem({ task, toggleTask, renameTask, removeTask }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const handleRename = () => {
        renameTask(task, title);
        setEditing(false);
    };

    // Función para formatear fecha y hora
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // "dd/mm/yyyy, hh:mm:ss"
    };

    return (
        <li style={{ marginBottom: "0.5rem" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
            />
            {editing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <button onClick={handleRename}>Guardar</button>
                </>
            ) : (
                <>
                    <span
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            marginLeft: "0.5rem"
                        }}
                    >
                        {task.title}
                    </span>
                    <span style={{ marginLeft: "1rem", fontSize: "0.8rem", color: "#555" }}>
                        Creada: {formatDate(task.createdAt)} | Actualizada: {formatDate(task.updatedAt)}
                    </span>
                    <button onClick={() => setEditing(true)} style={{ marginLeft: "0.5rem" }}>
                        Editar
                    </button>
                    <button onClick={() => removeTask(task)} style={{ marginLeft: "0.5rem" }}>
                        Borrar
                    </button>
                </>
            )}
        </li>
    );
}

export default TaskItem;

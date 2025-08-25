import React, { useState } from "react";

function TaskItem({ task, toggleTask, removeTask, renameTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleEdit = () => {
        if (isEditing) {
            renameTask(task._id, editedTitle); // guardamos cambios
        }
        setIsEditing(!isEditing);
    };

    return (
        <li
            style={{
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: task.completed ? "#d4edda" : "#fff",
            }}
        >
            {/* Texto o input según si estamos editando */}
            {isEditing ? (
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    style={{ flex: 1, marginRight: "0.5rem" }}
                />
            ) : (
                <span
                    onClick={() => toggleTask(task._id)}
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        cursor: "pointer",
                        flex: 1,
                    }}
                >
                    {task.title}
                </span>
            )}

            {/* Botones Editar y Borrar */}
            <button
                onClick={handleEdit}
                style={{
                    marginRight: "0.5rem",
                    background: "#ffa500",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "0.3rem 0.6rem",
                    cursor: "pointer",
                }}
            >
                {isEditing ? "Guardar" : "Editar"}
            </button>
            <button
                onClick={() => removeTask(task._id)}
                style={{
                    background: "#ff6b6b",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "0.3rem 0.6rem",
                    cursor: "pointer",
                }}
            >
                Borrar
            </button>
        </li>
    );
}

export default TaskItem;

import React from "react";

function TaskItem({ task, updateTask, deleteTask }) {
    const handleChange = (field, value) => {
        updateTask(task._id, field, value);
    };

    return (
        <div className="flex justify-between items-center p-2 border rounded bg-white">
            <div className="flex-1">
                <input
                    type="text"
                    value={task.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full border-b mb-1"
                />
                <div className="flex items-center space-x-2">
                    <select
                        value={task.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                        className="border px-1 rounded"
                    >
                        <option>Pendiente</option>
                        <option>En curso</option>
                        <option>Completada</option>
                    </select>

                    <input
                        type="datetime-local"
                        value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : ""}
                        onChange={(e) => handleChange("dueDate", e.target.value)}
                        className="border px-1 rounded"
                    />
                </div>
            </div>

            <button
                onClick={() => deleteTask(task._id)}
                className="ml-2 px-2 py-1 bg-red-600 text-white rounded"
            >
                Borrar
            </button>
        </div>
    );
}

export default TaskItem;

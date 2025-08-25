import React from "react";
import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, toggleTask, renameTask, removeTask }) {
    if (tasks.length === 0) return <p>No hay tareas todavía.</p>;

    // Orden descendente por createdAt
    const sortedTasks = [...tasks].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {sortedTasks.map(task => (
                <TaskItem
                    key={task._id}
                    task={task}
                    toggleTask={toggleTask}
                    renameTask={renameTask}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;

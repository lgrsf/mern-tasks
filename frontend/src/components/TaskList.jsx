import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem.jsx";
import axios from "axios";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/tasks");
            setTasks(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTask) return;
        try {
            const res = await axios.post("http://localhost:5000/api/tasks", {
                title: newTask,
                completed: false,
            });
            setTasks([...tasks, res.data]);
            setNewTask("");
        } catch (err) {
            console.error(err);
        }
    };

    const removeTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter((t) => t._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const toggleTask = async (id) => {
        const task = tasks.find((t) => t._id === id);
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
                ...task,
                completed: !task.completed,
            });
            setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
        } catch (err) {
            console.error(err);
        }
    };

    const renameTask = async (id, newTitle) => {
        const task = tasks.find((t) => t._id === id);
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
                ...task,
                title: newTitle,
            });
            setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}>
            <form onSubmit={handleAddTask} style={{ marginBottom: "1rem", display: "flex" }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva tarea..."
                    style={{ flex: 1, padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", background: "#667eea", color: "#fff", cursor: "pointer" }}>
                    Agregar
                </button>
            </form>

            {tasks.length === 0 ? (
                <p style={{ textAlign: "center" }}>No hay tareas todavía. ¡Agregá la primera arriba! 🚀</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {tasks.map((t) => (
                        <TaskItem
                            key={t._id}
                            task={t}
                            toggleTask={toggleTask}
                            removeTask={removeTask}
                            renameTask={renameTask}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;

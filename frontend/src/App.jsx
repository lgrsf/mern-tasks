import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList.jsx";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState("");

    const API = "http://localhost:5000/api/tasks";

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await axios.get(API);
            setTasks(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const createTask = async () => {
        if (!newTitle.trim()) return;
        try {
            const res = await axios.post(API, { title: newTitle });
            setTasks([res.data, ...tasks]);
            setNewTitle("");
        } catch (err) {
            console.error(err);
        }
    };

    const toggleTask = async (task) => {
        try {
            const res = await axios.put(`${API}/${task._id}`, { completed: !task.completed });
            setTasks(tasks.map(t => t._id === task._id ? res.data : t));
        } catch (err) {
            console.error(err);
        }
    };

    const renameTask = async (task, newTitle) => {
        if (!newTitle.trim()) return;
        try {
            const res = await axios.put(`${API}/${task._id}`, { title: newTitle });
            setTasks(tasks.map(t => t._id === task._id ? res.data : t));
        } catch (err) {
            console.error(err);
        }
    };

    const removeTask = async (task) => {
        try {
            await axios.delete(`${API}/${task._id}`);
            setTasks(tasks.filter(t => t._id !== task._id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>MERN Tasks</h1>
            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Nueva tarea..."
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
                <button onClick={createTask}>Agregar</button>
            </div>
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                renameTask={renameTask}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;

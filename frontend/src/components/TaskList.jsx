import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem.jsx";
import TaskCalendar from "./TaskCalendar.jsx";

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
            console.error("Error al obtener tareas:", err);
        }
    };

    const addTask = async (e) => {
        e.preventDefault();
        if (!newTask) return;
        try {
            const res = await axios.post("http://localhost:5000/api/tasks", {
                title: newTask,
                status: "Pendiente",
                dueDate: null,
            });
            setTasks([...tasks, res.data]);
            setNewTask("");
        } catch (err) {
            console.error("Error al agregar tarea:", err);
        }
    };

    const updateTask = async (id, field, value) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, { [field]: value });
            setTasks(tasks.map(task => (task._id === id ? res.data : task)));
        } catch (err) {
            console.error("Error al actualizar tarea:", err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            console.error("Error al eliminar tarea:", err);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={addTask} className="flex mb-4">
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 p-2 border rounded-l"
                />
                <button type="submit" className="p-2 bg-blue-600 text-white rounded-r">Agregar</button>
            </form>

            <div className="mb-6">
                <TaskCalendar tasks={tasks} />
            </div>

            <div className="space-y-2">
                {tasks.map(task => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;

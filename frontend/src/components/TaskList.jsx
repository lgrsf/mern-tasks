import React, { useState, useEffect } from "react";
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
            console.error("Error al obtener tareas:", err);
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTask) return;
        try {
            const res = await axios.post("http://localhost:5000/api/tasks", {
                title: newTask,
                status: "pendiente",
                completed: false
            });
            setTasks([...tasks, res.data]);
            setNewTask("");
        } catch (err) {
            console.error("Error al crear tarea:", err);
        }
    };

    const handleUpdateTask = async (id, field, value) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
                [field]: value
            });
            setTasks(tasks.map(t => (t._id === id ? res.data : t)));
        } catch (err) {
            console.error("Error al actualizar tarea:", err);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (err) {
            console.error("Error al eliminar tarea:", err);
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
            <h2>Mis Tareas</h2>

            <form onSubmit={handleAddTask} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva tarea..."
                    style={{ padding: "5px", width: "70%" }}
                />
                <button type="submit" style={{ padding: "5px 10px", marginLeft: "10px" }}>Agregar</button>
            </form>

            {tasks.length === 0 ? <p>No hay tareas todavía.</p> : (
                tasks.map(task => (
                    <div key={task._id} style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div>
                            <input
                                type="text"
                                value={task.title}
                                onChange={(e) => handleUpdateTask(task._id, "title", e.target.value)}
                                style={{ fontSize: "16px", width: "100%" }}
                            />
                            <select
                                value={task.status}
                                onChange={(e) => handleUpdateTask(task._id, "status", e.target.value)}
                                style={{ marginTop: "5px" }}
                            >
                                <option value="pendiente">Pendiente</option>
                                <option value="en curso">En curso</option>
                                <option value="completada">Completada</option>
                            </select>
                            <input
                                type="datetime-local"
                                value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 16) : ""}
                                onChange={(e) => handleUpdateTask(task._id, "dueDate", e.target.value)}
                                style={{ marginTop: "5px" }}
                            />
                        </div>
                        <button onClick={() => handleDeleteTask(task._id)} style={{ marginLeft: "10px", color: "red" }}>Borrar</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TaskList;

import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parseISO } from "date-fns";
import axios from "axios";

function TaskCalendar() {
    const [tasks, setTasks] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

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

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(selectedDate),
        end: endOfMonth(selectedDate)
    });

    const tasksByDate = (date) => {
        return tasks.filter(task => task.dueDate && isSameDay(parseISO(task.dueDate), date));
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
            <h2>Calendario de Tareas</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px", marginTop: "20px" }}>
                {daysInMonth.map(day => {
                    const dayTasks = tasksByDate(day);
                    return (
                        <div
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            style={{
                                padding: "10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                backgroundColor: dayTasks.length > 0 ? "#1976d2" : "#f0f0f0",
                                color: dayTasks.length > 0 ? "white" : "black"
                            }}
                        >
                            {format(day, "d")}
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: "20px", textAlign: "left" }}>
                <h3>Tareas del {format(selectedDate, "dd/MM/yyyy")}</h3>
                {tasksByDate(selectedDate).length === 0 ? (
                    <p>No hay tareas para este día.</p>
                ) : (
                    tasksByDate(selectedDate).map(task => (
                        <div key={task._id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", marginBottom: "5px" }}>
                            <strong>{task.title}</strong><br />
                            Estado: {task.status}<br />
                            Fecha/Hora: {task.dueDate ? format(parseISO(task.dueDate), "HH:mm dd/MM/yyyy") : "Sin definir"}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TaskCalendar;

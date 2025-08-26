import React, { useState, useEffect } from "react";

function TaskCalendar({ tasks = [] }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Agrupar tareas por día
    const tasksByDay = tasks.reduce((acc, task) => {
        if (!task.dueDate) return acc;
        const dateKey = new Date(task.dueDate).toDateString();
        if (!acc[dateKey]) acc[dateKey] = [];
        acc[dateKey].push(task);
        return acc;
    }, {});

    // Generar días del mes actual
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        daysArray.push(date);
    }

    const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="px-4 py-2 bg-gray-300 rounded">←</button>
                <h2 className="text-xl font-bold">
                    {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                </h2>
                <button onClick={nextMonth} className="px-4 py-2 bg-gray-300 rounded">→</button>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {daysArray.map((day) => {
                    const dayTasks = tasksByDay[day.toDateString()] || [];
                    return (
                        <div
                            key={day}
                            className={`p-2 border rounded text-center ${dayTasks.length > 0 ? "bg-yellow-200" : "bg-white"}`}
                        >
                            {day.getDate()}
                            {dayTasks.length > 0 && (
                                <div className="text-xs mt-1">{dayTasks.length} tarea{dayTasks.length > 1 ? "s" : ""}</div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TaskCalendar;

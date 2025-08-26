import TaskCalendar from "../components/TaskCalendar";
import { Link } from "react-router-dom";

function CalendarPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Calendario de Tareas</h1>
            <TaskCalendar />
            <Link
                to="/"
                className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
                Volver al Dashboard
            </Link>
        </div>
    );
}

export default CalendarPage;

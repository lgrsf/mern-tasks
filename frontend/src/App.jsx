import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white p-4 flex gap-4">
                <Link to="/" className="hover:underline">Inicio</Link>
                <Link to="/tasks" className="hover:underline">Tareas</Link>
            </nav>

            <main className="p-6">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/tasks" element={<TaskList />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

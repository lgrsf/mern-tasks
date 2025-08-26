import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Gestor de Tareas</h1>
            <div className="space-x-4">
                <Link to="/tasks" className="hover:underline">
                    Tareas
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

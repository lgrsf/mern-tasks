import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import TaskList from "./components/TaskList.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <>
            {/* Navbar visible en todas las páginas */}
            <Navbar />

            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </>
    );
}

export default App;

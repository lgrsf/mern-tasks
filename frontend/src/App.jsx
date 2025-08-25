import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskCalendar from "./components/TaskCalendar.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/calendar" element={<TaskCalendar />} />
            </Routes>
        </>
    );
}

export default App;

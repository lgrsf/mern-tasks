import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            backgroundColor: "#1976d2",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white"
        }}>
            <h1 style={{ margin: 0 }}>MERN Tasks</h1>
            <div>
                <Link to="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Mis Tareas</Link>
                <Link to="/calendar" style={{ color: "white", textDecoration: "none" }}>Calendario</Link>
            </div>
        </nav>
    );
}

export default Navbar;

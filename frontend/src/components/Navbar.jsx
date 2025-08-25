import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation(); // Saber en qué ruta estamos

    const linkStyle = (path) => ({
        color: location.pathname === path ? "#764ba2" : "#fff",
        fontWeight: location.pathname === path ? "bold" : "normal",
        margin: "0 1rem",
        textDecoration: "none",
        transition: "0.3s",
    });

    return (
        <nav style={styles.nav}>
            <div style={styles.brand}>
                <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    MERN Tasks
                </Link>
            </div>
            <div>
                <Link to="/" style={linkStyle("/")}>
                    Inicio
                </Link>
                <Link to="/tasks" style={linkStyle("/tasks")}>
                    Mis Tareas
                </Link>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#667eea",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
    },
    brand: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
};

export default Navbar;

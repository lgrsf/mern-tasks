import React from "react";      // 🔹 IMPORTANTE
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🚀 Bienvenido a MERN Tasks</h1>
            <p style={styles.subtitle}>
                Una aplicación simple para gestionar tus tareas con <b>MERN Stack</b>.
            </p>

            <Link to="/tasks" style={styles.button}>
                Ver mis tareas
            </Link>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
    },
    title: { fontSize: "3rem", marginBottom: "1rem" },
    subtitle: { fontSize: "1.2rem", marginBottom: "2rem" },
    button: {
        padding: "10px 20px",
        background: "#fff",
        color: "#764ba2",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1rem",
    },
};

export default Welcome;

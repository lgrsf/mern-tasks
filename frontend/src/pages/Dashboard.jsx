import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Bienvenido al panel principal.</p>
            <Link
                to="/calendar"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Ir al Calendario
            </Link>
        </div>
    );
}

export default Dashboard;

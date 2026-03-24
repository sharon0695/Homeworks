
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { replace, useNavigate } from "react-router-dom";

function Dashboard() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
        replace(true)
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Bienvenido, {user?.email}</p>

            <hr />

            <h3>Elige a que página te quieres dirigir</h3>

            <button onClick={() => navigate("/biblioteca")}>
                Ir a Biblioteca 📚
            </button>

            <button onClick={() => navigate("/atmdata")}>
                Ir a Cajero Automático 💳
            </button>

            <hr />

            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Dashboard;
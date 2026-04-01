import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (error) {
            alert("Credenciales incorrectas: " + error.message);
        }
    };

    return (
        <div className="auth-container">
            <form className="form-card" onSubmit={handleLogin}>
                <h2>Bienvenido de Nuevo</h2>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login</button>

                <div className="link">
                    <a href="/register">No tienes una cuenta? Regístrate aquí</a>
                </div>
            </form>
        </div>
    );
}
export default Login
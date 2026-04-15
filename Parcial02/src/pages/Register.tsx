import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            navigate("/login");
        } catch (error) {
            alert("Error al registrar: " + error.message);
        }
    };

    return (
    <div className="auth-container">
      <form className="form-card" onSubmit={handleRegister}>
        <h2>Crea Tu Cuenta</h2>

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

        <button>Registrarse</button>

        <div className="link">
          <a href="/">¿Ya tienes una cuenta? Inicia sesión aquí</a>
        </div>
      </form>
    </div>
  );
}
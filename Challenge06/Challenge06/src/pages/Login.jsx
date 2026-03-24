
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        if (email === "user@mail.com" && password === "123") {
            login({ email })
            navigate("/dashboard")
        } else {
            alert("Credenciales incorrectas")
        }
        console.log(email, password)
    }
 
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>

                <input
                    placeholder="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Ingresar</button>
            </div>
        </div>
    );
}

export default Login

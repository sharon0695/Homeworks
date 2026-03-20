import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react"
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

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
    }
 
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2>Login</h2>

                <IonInput
                    placeholder="Email"
                    onInput={(e) => setEmail(e.detail.value)}
                />
                <IonInput
                    placeholder="Password"
                    type="password"
                    onInput={(e) => setPassword(e.detail.value)}
                />

                <IonButton expand="block" onClick={handleLogin}>
                    Ingresar
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login

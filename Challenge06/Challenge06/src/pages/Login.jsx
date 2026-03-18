import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react"
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        const allowUser = {
            email: "user@mail.com",
            password: "123"
        }

        login(allowUser)
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2>Login</h2>

                <IonInput
                    placeholder="Email"
                    onInput={(e) => setEmail(e.detail.value)}
                />

                <IonButton expand="block" onClick={handleLogin}>
                    Ingresar
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login
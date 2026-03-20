import { IonPage, IonContent, IonButton } from "@ionic/react"
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
        <IonPage>
            <IonContent className="ion-padding">
                <h2>Dashboard</h2>
                <p>Bienvenido, {user?.email}!</p>

                <IonButton onClick={handleLogout}>
                    Cerrar sesión
                </IonButton>
            </IonContent>
        </IonPage>
    )
}
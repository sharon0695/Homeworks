import { IonPage, IonContent, IonButton } from "@ionic/react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

function Dashboard() {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
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
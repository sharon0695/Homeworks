import { createContext, useState, type ReactNode } from "react";

type User = {
    usuario: string
    rol: "doctor" | "recepcionista"
}

type AuthContextType = {
    user: User | null
    login: (usuario: string, rol: User["rol"]) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type Props = {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (usuario: string, rol: User["rol"]) => {
        setUser({ usuario, rol })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
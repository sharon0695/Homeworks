import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";

export const useAuth = () => {
    const register = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    return { register, login, logout };
};
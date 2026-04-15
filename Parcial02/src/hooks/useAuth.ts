import { auth } from "../firebase/config";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,type UserCredential,} from "firebase/auth";

export const useAuth = () => {
  const register = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };

  return { register, login, logout };
};
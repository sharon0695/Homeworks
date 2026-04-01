import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCddZi20bezwSlTgoF8PrzMo5Gp37xBRlg",
  authDomain: "estructuras-76db4.firebaseapp.com",
  databaseURL: "https://estructuras-76db4-default-rtdb.firebaseio.com",
  projectId: "estructuras-76db4",
  storageBucket: "estructuras-76db4.firebasestorage.app",
  messagingSenderId: "236465804125",
  appId: "1:236465804125:web:6347e1bfa5d6cd735e4eb4",
  measurementId: "G-BXZ11910SY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
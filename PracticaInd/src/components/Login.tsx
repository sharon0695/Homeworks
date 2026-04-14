import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => login(name, "recepcionista")}>
        Ingresar
      </button>
    </div>
  );
};

export default Login;
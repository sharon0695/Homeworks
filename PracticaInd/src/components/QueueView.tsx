import { useState } from "react";
import useClinic from "../hooks/useClinic";

const QueueView = () => {
  const { patients, addNewPatient, attendPatient } = useClinic();
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Nombre paciente"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => addNewPatient(name)}>
        Agregar paciente
      </button>

      <button onClick={attendPatient}>
        Atender
      </button>

      {patients.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default QueueView;
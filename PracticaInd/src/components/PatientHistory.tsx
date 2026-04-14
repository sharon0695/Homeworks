import type { Patient } from "../models/Patient";
import { useState } from "react";

type Props = {
  patient: Patient;
};

const PatientHistory = ({ patient }: Props) => {
  const [, setRefresh] = useState(0);

  const addAction = () => {
    patient.history.push("Nueva acción médica");
    setRefresh(v => v + 1); 
  };

  const undoAction = () => {
    patient.history.pop();
    setRefresh(v => v + 1);
  };

  return (
    <div>
      <h3>Historial de {patient.name}</h3>

      <button onClick={addAction}>Agregar acción</button>
      <button onClick={undoAction}>Deshacer</button>

      {patient.history.getAll().map((h, i) => (
        <div key={i}>{h}</div>
      ))}
    </div>
  );
};

export default PatientHistory;
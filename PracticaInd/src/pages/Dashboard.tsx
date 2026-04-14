import { useState } from "react";
import QueueView from "../components/QueueView";
import TreeView from "../components/TreeView";
import PatientHistory from "../components/PatientHistory";
import { createMedicalTree } from "../models/MedicalTree";
import useClinic from "../hooks/useClinic";

const Dashboard = () => {
  const tree = createMedicalTree();
  const { patients } = useClinic();
  const [selected, setSelected] = useState<string | null>(null);

  const selectedPatient = patients.find(p => p.id === selected);

  return (
    <div>
      <h1>Clínica</h1>

      <QueueView />

      <h2>Árbol de especialidades</h2>
      <TreeView node={tree} />

      <h2>Pacientes</h2>
      {patients.map(p => (
        <div key={p.id} onClick={() => setSelected(p.id)}>
          {p.name}
        </div>
      ))}

      {selectedPatient && (
        <PatientHistory patient={selectedPatient} />
      )}
    </div>
  );
};

export default Dashboard;
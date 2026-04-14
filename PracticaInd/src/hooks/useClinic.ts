import { useContext } from "react";
import { ClinicContext } from "../context/ClinicContext";
import Stack from "../models/Stack";
import type { Patient } from "../models/Patient";

const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) throw new Error("useClinic dentro de provider");

  const { queue, patients, addPatient, attendPatient } = context;

  const createPatient = (name: string): Patient => {
    return {
      id: Date.now().toString(),
      name,
      history: new Stack<string>()
    };
  };

  const addNewPatient = (name: string) => {
    const patient = createPatient(name);
    addPatient(patient);
  };

  return {
    queue,
    patients,
    addNewPatient,
    attendPatient
  };
};

export default useClinic;
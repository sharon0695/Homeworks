import { createContext, useState, type ReactNode } from "react";
import Queue from "../models/Queue";
import type { Patient } from "../models/Patient";

type ClinicContextType = {
  queue: Queue<Patient>;
  patients: Patient[];
  addPatient: (p: Patient) => void;
  attendPatient: () => Patient | undefined;
};

const ClinicContext = createContext<ClinicContextType | null>(null);

type Props = {
  children: ReactNode;
};

const ClinicProvider = ({ children }: Props) => {
  const [queue] = useState(new Queue<Patient>());
  const [, setVersion] = useState(0); 
  const refresh = () => setVersion(v => v + 1);

  const addPatient = (p: Patient) => {
    queue.enqueue(p);
    refresh();
  };

  const attendPatient = () => {
    const patient = queue.dequeue();
    refresh();
    return patient;
  };

  return (
    <ClinicContext.Provider value={{ queue, patients: queue.getAll(), addPatient, attendPatient }}>
      {children}
    </ClinicContext.Provider>
  );
};

export { ClinicContext, ClinicProvider };
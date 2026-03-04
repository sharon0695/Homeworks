import React, { useState } from "react";
import Node from "../estructuras/LinkedList/Node";
import LinkedList from "../estructuras/LinkedList/LinkedList";
import type { Patient } from "../App";

interface Pacientes {
  name: string;
  turno: string;
}

interface GestionTurnosProps {
  onAtendido: (paciente: Patient) => void;
}

const GestionTurnos: React.FC<GestionTurnosProps> = ({ onAtendido }) => {
  const [list] = useState<LinkedList<Pacientes>>(() => {
    const lista = new LinkedList<Pacientes>();
    lista.append({ name: "Samuel Ruiz", turno: "Turno 1" });
    lista.append({ name: "Sharon Abella", turno: "Turno 2" });
    lista.append({ name: "Mariana Torres", turno: "Turno 3" });
    lista.append({ name: "Trina Vega", turno: "Turno 4" });
    return lista;
  });

  const [current, setCurrent] = useState<Node<Pacientes> | null>(list.head);
  const [pacientes, setPacientes] = useState<Pacientes[]>(list.toArray());
  const [turno, setTurno] = useState<number>(5);
  const [name, setName] = useState<string>("");

  // Agregar nuevo paciente
  const addPaciente = (): void => {
    if (!name.trim()) return; // Evitar nombres vacíos
    const nuevo: Pacientes = { name, turno: `Turno ${turno}` };
    list.append(nuevo);
    setTurno(turno + 1);
    setName("");
    setPacientes(list.toArray());
    if (!current) setCurrent(list.head);
  };

  // Marcar paciente como atendido
  const atendido = (): void => {
    if (!current) return;

    const pacienteActual = current.value;

    // Enviar al historial mediante callback
    onAtendido({ name: pacienteActual.name, turno: pacienteActual.turno });

    // Eliminar de la lista de espera
    list.remove(pacienteActual.turno);
    setPacientes(list.toArray());

    // Actualizar paciente actual
    setCurrent(list.head);
  };

  // Lista de espera excluyendo el paciente actual
  const listaEspera = pacientes.filter(
    (p) => current && p.turno !== current.value.turno
  );

  return (
    <div className="lista-espera">
      <h1>Paciente en Atención:</h1>
      {current ? (
        <div>
          <h2>
            {current.value.name} - {current.value.turno}
          </h2>
          <button onClick={atendido}>Atendido</button>
        </div>
      ) : (
        <h2>No hay pacientes en espera</h2>
      )}

      <h3>Agregar nuevo paciente:</h3>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addPaciente}>Agregar Paciente</button>

      <h2>Lista de Espera:</h2>
      {listaEspera.length === 0 ? (
        <p>No hay más pacientes en espera.</p>
      ) : (
        <ul>
          {listaEspera.map((pac) => (
            <li key={pac.turno}>
              {pac.name} - {pac.turno}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GestionTurnos;
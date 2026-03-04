import React, { useState, useEffect } from 'react';
import DoubleLinkedList from '../estructuras/DoubleLinked/DoubleLinkedList';
import type { Patient } from '../App';

interface HistorialProps {
    patients: Patient[];
  }
  
  const Historial: React.FC<HistorialProps> = ({ patients }) => {
    const [history] = useState<DoubleLinkedList<Patient>>(() => {
      const list = new DoubleLinkedList<Patient>();
      patients.forEach((p) => list.append(p));
      return list;
    });
  
    const [currentNode, setCurrentNode] = useState(history.head);
  
    useEffect(() => {
      setCurrentNode(history.head); 
    }, [history, patients]);
  
    const nextPatient = () => {
      if (currentNode?.next) setCurrentNode(currentNode.next);
    };
  
    const prevPatient = () => {
      if (currentNode?.prev) setCurrentNode(currentNode.prev);
    };
  
    return (
      <div className="historial">
        <h2>Historial de Atención de Pacientes</h2>
  
        {currentNode ? (
          <div className="paciente-actual">
            <h3>Paciente Actual</h3>
            <p>{currentNode.value.name} - {currentNode.value.turno}</p>
            <div className="botones-navegacion">
              <button onClick={prevPatient} disabled={!currentNode.prev}>Anterior</button>
              <button onClick={nextPatient} disabled={!currentNode.next}>Siguiente</button>
            </div>
          </div>
        ) : (
          <p>No hay pacientes atendidos.</p>
        )}
  
        {history.toArray().length > 0 && (
          <>
            <h3>Lista completa de pacientes atendidos:</h3>
            <ul>
              {history.toArray().map((p, i) => (
                <li key={i}>{p.name} - {p.turno}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };
  
  export default Historial;
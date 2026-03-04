import React, { useState } from 'react';
import GestionTurnos from './paginas/turnos';
import Historial from './paginas/historial';
import Doctores from './paginas/doctores';
import AdminCommite from './paginas/comite';
import './App.css';

export interface Patient {
  name: string;
  turno: string;
}

type Page = 'home' | 'history' | 'doctors' | 'commite';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const [historial, setHistorial] = useState<Patient[]>([]);

  const handleAtendido = (paciente: Patient) => {
    setHistorial(prev => [...prev, paciente]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <GestionTurnos onAtendido={handleAtendido} />;
      case 'history':
        return <Historial patients={historial} />;
      case 'doctors':
        return <Doctores />;
      case 'commite':
        return <AdminCommite />;
      default:
        return <GestionTurnos onAtendido={handleAtendido} />;
    }
  };

  return (
    <div className="App">
      <h1>Sistema De Clínica</h1>

      <nav>
        <button onClick={() => setCurrentPage('home')}>Turnos</button>
        <button onClick={() => setCurrentPage('history')}>Historial</button>
        <button onClick={() => setCurrentPage('doctors')}>Doctores</button>
        <button onClick={() => setCurrentPage('commite')}>Comité</button>
      </nav>

      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
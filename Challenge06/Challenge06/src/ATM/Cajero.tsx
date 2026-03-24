import { useState } from 'react'
import {Queue} from './Queue'
import ATMdata from './ATMdata'
import './Atm.css'
import { useNavigate } from 'react-router-dom'

const queue = new Queue();
queue.enqueue(new ATMdata("Alan Basante", 100));
queue.enqueue(new ATMdata("Maria Perez", 250));
queue.enqueue(new ATMdata("Sharon Rivera", 180));
queue.enqueue(new ATMdata("Samuel Moliña", 430));
queue.enqueue(new ATMdata("Juanito Alimaña", 320));

function App() {
  const navigate = useNavigate()
  const [cola, setCola] = useState(queue.getAll());

  const [form, setForm] = useState({
    name: "",
    monto: 0
  });

  const addPerson = () => {
    const newPerson = new ATMdata(form.name, form.monto);
    queue.enqueue(newPerson);
    setCola(queue.getAll());

    setForm({
      name: "",
      monto: 0
    });
  }

  const organizar = [...cola].sort((a, b) => a.fecha.getTime() - b.fecha.getTime());

  const atender = () => {
    queue.dequeue();
    setCola(queue.getAll());
  }

  return (
    <div className="App">
      <h1>Cola del ATM</h1>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input
          type="number"
          placeholder="Monto"
          value={form.monto}
          onChange={(e) => setForm({...form, monto: Number(e.target.value)})}
        />
        <button type="button" onClick={addPerson}>
          Agregar Persona
        </button>
      </form>
      <ul>
        {organizar.map((person, index) => (
          <li key={index}>
          <p>{person.name} - ${person.monto} - {person.fecha.toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <button onClick={atender}>
        Atender Siguiente
      </button>
      <button onClick={() => navigate("/dashboard")}>Volver a la página principal</button>
    </div>
  )
}

export default App

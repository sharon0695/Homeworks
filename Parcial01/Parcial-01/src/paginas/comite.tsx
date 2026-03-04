import React, { useState, useEffect } from 'react';
import DoubleCircularList from '../estructuras/DoubleCircular/DoubleCircularList';

interface Miembros {
  name: string;
  role: string;
}

const AdminCommite: React.FC = () => {
  const [listaCom] = useState<DoubleCircularList<Miembros>>(() => {
    const lista = new DoubleCircularList<Miembros>();
    lista.append({ name: "Miguel Osorio", role: "Presidente" });
    lista.append({ name: "Andres Diaz", role: "Secretario" });
    lista.append({ name: "Monica Portilla", role: "Tesorera" });
    lista.append({ name: "Zuray Diaz", role: "Secretaria" });
    return lista;
  });

  const [current, setCurrent] = useState<Miembros | null>(null);
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    if (listaCom.head) {
      setCurrent(listaCom.head.value);
    }
  }, [listaCom]);

  const addMember = () => {
    if (!name.trim() || !role.trim()) return;
    listaCom.append({ name, role });
    if (!current) setCurrent(listaCom.head?.value ?? null);
    setName('');
    setRole('');
  };

  const nextMember = () => {
    if (!current || !listaCom.head) return;
    let nodo = listaCom.head;
    while (nodo.value !== current && nodo.next !== listaCom.head) {
      nodo = nodo.next!;
    }
    setCurrent(nodo.next?.value ?? listaCom.head.value);
  };

  const prevMember = () => {
    if (!current || !listaCom.head) return;
    let nodo = listaCom.head;
    while (nodo.value !== current && nodo.next !== listaCom.head) {
      nodo = nodo.next!;
    }
    setCurrent(nodo.prev?.value ?? listaCom.tail?.value ?? null);
  };

  return (
    <div className="admin-comite">
      <h1>Comité Administrativo</h1>

      <h3>Añadir nuevo miembro</h3>
      <input
        type="text"
        placeholder="Nombre del miembro"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rol"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={addMember}>Añadir miembro</button>

      <h2>Visualización de miembros:</h2>
      {current ? (
        <div className="miembro-actual">
          <h3>{current.name}</h3>
          <p>{current.role}</p>
          <div className="botones-navegacion">
            <button onClick={prevMember}>Anterior</button>
            <button onClick={nextMember}>Siguiente</button>
          </div>
        </div>
      ) : (
        <p>No hay miembros en el comité.</p>
      )}
    </div>
  );
};

export default AdminCommite;
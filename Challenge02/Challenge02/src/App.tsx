import React, {useState, useEffect} from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<{name: string, phone: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simular carga
    setTimeout(() => {
      setContacts([
        {name: "Sharon Abella", phone: "3405698741"},
        {name: "Mauricio Torres", phone: "3115963250"}
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (contact: {name: string, phone: string}) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index: number) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1); // Eliminar el contacto en la posición dada
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <h1>Contact List</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AddContact addContact={addContact} />
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        </>
      )}
    </div>
  );
}

export default App;

import React, {useState} from "react";

interface Props {
  addContact: (contact: {name: string, phone: string}) => void;
}

const AddContact: React.FC<Props> = ({ addContact }) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return; // Validar que ambos campos estén llenos

    addContact({ name, phone }); // Agregar el nuevo contacto
    setName("");
    setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;
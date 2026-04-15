import { useState } from "react";
import {useTree} from "../hooks/useTree";

const AddNodeForm = () => {
    const { createNode } = useTree();
    const [parent, setParent] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createNode(parent || null, value);
        setValue("");
        setParent("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Padre"
                value={parent}
                onChange={(e) => setParent(e.target.value)}
            />
            <input
                placeholder="Nuevo Nodo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Agregar Nodo</button>
        </form>
    );
}

export default AddNodeForm;
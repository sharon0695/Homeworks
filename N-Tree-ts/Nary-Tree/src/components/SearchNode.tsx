import { useState } from "react";
import useTree from "../hooks/useTree";

const SearchNode = () => {
    const { tree } = useTree();
    const [value, setValue] = useState("");

    const handleSearch = () => {
        const result = tree?.find(value)
        alert(result ? `Nodo encontrado: ${result.value}` : "Nodo no encontrado");
    }

    return (
        <div>
            <input
                placeholder="Buscar Nodo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}
 
export default SearchNode;
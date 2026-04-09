import { useState } from "react"
import imprimirRecorridos from "../functions"

const TreeControls = ({ arbol, setRefresh }) => {

    const [valorInsertar, setValorInsertar] = useState("")
    const [valorBuscar, setValorBuscar] = useState("")

    const handleInsertar = () => {
        if (valorInsertar === "") return

        arbol.insertar(Number(valorInsertar))

        console.log(`Insertado: ${valorInsertar}`)
        imprimirRecorridos(arbol)
        alert("Nodo insertado! Revisa la consola para ver los recorridos actualizados 👀")

        setRefresh(prev => prev + 1)
        setValorInsertar("")
    }

    const handleBuscar = () => {
        if (valorBuscar === "") return

        const existe = arbol.buscar(Number(valorBuscar))

        console.log(`Buscar ${valorBuscar}:`, existe ? "SI existe" : "NO existe")

        alert(`Buscar ${valorBuscar}: ${existe ? "SI existe" : "NO existe"}`)

        setValorBuscar("")
    }

    return (
        <div className="controls">

            <div className="section">
                <h3>Insertar nodo</h3>
                <input
                    type="number"
                    value={valorInsertar}
                    onChange={(e) => setValorInsertar(e.target.value)}
                    placeholder="Número"
                />
                <button onClick={handleInsertar}>Insertar</button>
            </div>

            <div className="section">
                <h3>Buscar nodo</h3>
                <input
                    type="number"
                    value={valorBuscar}
                    onChange={(e) => setValorBuscar(e.target.value)}
                    placeholder="Número"
                />
                <button onClick={handleBuscar}>Buscar</button>
            </div>

        </div>
    )
}

export default TreeControls
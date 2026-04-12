import { useState } from "react"
import ArbolBinario from "../estructura/ArbolBinario"
import imprimirRecorridos from "../functions"

type Props = {
  arbol: ArbolBinario
  setRefresh: React.Dispatch<React.SetStateAction<number>>
}

const TreeControls = ({ arbol, setRefresh }: Props) => {
  const [valorInsertar, setValorInsertar] = useState<string>("")
  const [valorBuscar, setValorBuscar] = useState<string>("")

  const handleInsertar = () => {
    if (valorInsertar === "") return

    arbol.insertar(Number(valorInsertar))

    console.log(`Insertado: ${valorInsertar}`)
    imprimirRecorridos(arbol)

    alert("Nodo insertado! Revisa la consola 👀")

    setRefresh(prev => prev + 1)
    setValorInsertar("")
  }

  const handleBuscar = () => {
    if (valorBuscar === "") return

    const existe = arbol.buscar(Number(valorBuscar))

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
        />
        <button onClick={handleInsertar}>Insertar</button>
      </div>

      <div className="section">
        <h3>Buscar nodo</h3>
        <input
          type="number"
          value={valorBuscar}
          onChange={(e) => setValorBuscar(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>
    </div>
  )
}

export default TreeControls
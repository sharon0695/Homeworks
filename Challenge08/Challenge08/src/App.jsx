import { useEffect, useState } from "react"
import arbolInicial from "./data"
import imprimirRecorridos from "./functions"
import TreeView from "./componentes/TreeView"
import TreeControls from "./componentes/TreeFunciones"

const App = () => {

  const [arbol, setArbol] = useState(arbolInicial)
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    imprimirRecorridos(arbol)
  }, [arbol])

  return (
    <div className="app-container">
      <h1>Árbol Binario Interactivo</h1>

      <TreeControls arbol={arbol} setRefresh={setRefresh} />

      <TreeView arbol={arbol} />

      <p>Los resultados se muestran en consola</p>
    </div>
  )
}

export default App
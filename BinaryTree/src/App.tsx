import { useEffect, useState } from "react"
import arbolInicial from "./data"
import imprimirRecorridos from "./functions"
import TreeView from "./componentes/TreeView"
import TreeControls from "./componentes/TreeControls"
import ArbolBinario from "./estructura/ArbolBinario"

const App = () => {
  const [arbol] = useState<ArbolBinario>(arbolInicial)
  const [, setRefresh] = useState<number>(0)

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
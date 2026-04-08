import BinaryTree from "./BinaryTree.jsx"
import arbol from "./data.js"
import imprimirNumeros from "./functions.js"

const App = () => (
  <div>
    <h1>Árbol Binario</h1>
    <BinaryTree root={arbol} />
    <h2>Números en orden</h2>
    <p>{imprimirNumeros(arbol)}</p>
  </div>
)
export default App
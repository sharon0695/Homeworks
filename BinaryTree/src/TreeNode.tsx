import Nodo from "./estructura/Nodo"

type Props = {
  node: Nodo | null
  onInsert: (node: Nodo, side: "izquierda" | "derecha") => void
}

const TreeNode = ({ node, onInsert }: Props) => {
  if (!node) return null

  return (
    <div className="node-container">
      <div className="node">
        {node.valor}
        <div>
          <button onClick={() => onInsert(node, "izquierda")}>Left</button>
          <button onClick={() => onInsert(node, "derecha")}>Right</button>
        </div>
      </div>

      <div className="children">
        <TreeNode node={node.izquierda} onInsert={onInsert} />
        <TreeNode node={node.derecha} onInsert={onInsert} />
      </div>
    </div>
  )
}

export default TreeNode
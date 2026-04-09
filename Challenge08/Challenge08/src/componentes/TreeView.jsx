import Tree from "react-d3-tree"

const convertirAD3 = (nodo) => {
    if (!nodo) return null

    return {
        name: nodo.valor.toString(),
        children: [
            convertirAD3(nodo.izquierda),
            convertirAD3(nodo.derecha)
        ].filter(Boolean)
    }
}

const TreeView = ({ arbol }) => {
    const data = convertirAD3(arbol.raiz)

    return (
        <div className="tree-container">
            <Tree data={data} orientation="vertical" />
        </div>
    )
}

export default TreeView
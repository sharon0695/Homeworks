import Tree from "react-d3-tree"
import ArbolBinario from "../estructura/ArbolBinario"
import Nodo from "../estructura/Nodo"

type D3Node = {
    name: string;
    children?: D3Node[];
}

const convertirAD3 = (nodo: Nodo | null): D3Node | null => {
    if(!nodo) return null;

    return {
        name: nodo.valor.toString(),
        children: [convertirAD3(nodo.izquierda), convertirAD3(nodo.derecha)]
        .filter(Boolean) as D3Node[]
    }
}

type Props = {
    arbol: ArbolBinario;
}

const TreeView = ({ arbol }: Props) => {
    const data = convertirAD3(arbol.raiz);
    
    return (
        <div className="tree-container">
            {data && <Tree data={data} orientation="vertical" />}
        </div>
    )
}

export default TreeView;
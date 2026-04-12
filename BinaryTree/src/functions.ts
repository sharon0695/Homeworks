import ArbolBinario from "./estructura/ArbolBinario";

const imprimirRecorridos = (arbol: ArbolBinario):void => {
    console.log("Recorrido Preorden:");
    arbol.preorden(arbol.raiz);
    console.log("Recorrido Inorden:");
    arbol.inorden(arbol.raiz);
    console.log("Recorrido Postorden:");
    arbol.postorden(arbol.raiz);
}

export default imprimirRecorridos;
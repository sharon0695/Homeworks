const imprimirRecorridos = (arbol) => {
    console.log("INORDEN:")
    arbol.inorden(arbol.raiz)

    console.log("PREORDEN:")
    arbol.preorden(arbol.raiz)

    console.log("POSTORDEN:")
    arbol.postorden(arbol.raiz)
}

export default imprimirRecorridos
import ArbolBinario from "./estructura/ArbolBinario.js"
import arbol from "./data.js"

//imprimir los números que se encuentran en arbol usando las funciones de arbol binario para imprimir por consola inorder, preorder y postorder

function imprimirNumeros(arbol) {
    const arbolBinario = new ArbolBinario()
    arbolBinario.insertar(arbol.valor)
    arbolBinario.insertar(arbol.izquierda.valor)
    arbolBinario.insertar(arbol.izquierda.izquierda.valor)
    arbolBinario.insertar(arbol.izquierda.derecha.valor)
    arbolBinario.insertar(arbol.derecha.valor)

    console.log("Inorder:")
    arbolBinario.inorden(arbolBinario.raiz)

    console.log("Preorder:")
    arbolBinario.preorden(arbolBinario.raiz)

    console.log("Postorder:")
    arbolBinario.postorden(arbolBinario.raiz)
}

export default { imprimirNumeros }
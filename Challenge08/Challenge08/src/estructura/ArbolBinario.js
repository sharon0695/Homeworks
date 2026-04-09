import Nodo from "./Nodo"

class ArbolBinario {
    constructor() {
        this.raiz = null
    }
    insertar(valor) {
        const nuevoNodo = new Nodo(valor)
        if (!this.raiz) {
            this.raiz = nuevoNodo
            return
        }

        let actual = this.raiz
        while (true) {
            if (valor < actual.valor) {
                if (!actual.izquierda) {
                    actual.izquierda = nuevoNodo
                    return
                }
                actual = actual.izquierda
            } else {
                if (!actual.derecha) {
                    actual.derecha = nuevoNodo
                    return
                }
                actual = actual.derecha
            }
        }
    }

    preorden(nodo) {
        if (!nodo) return
        console.log(nodo.valor)
        this.preorden(nodo.izquierda)
        this.preorden(nodo.derecha)
    }

    inorden(nodo) {
        if (!nodo) return
        this.inorden(nodo.izquierda)
        console.log(nodo.valor)
        this.inorden(nodo.derecha)        
    }

    postorden(nodo) {
        if (!nodo) return
        this.postorden(nodo.izquierda)
        this.postorden(nodo.derecha)
        console.log(nodo.valor)        
    }

    buscar(valor, nodo = this.raiz) {
        if (!nodo) return false
        if (nodo.valor === valor) return true

        if (valor < nodo.valor) {
            return this.buscar(valor, nodo.izquierda)
        } else {
            return this.buscar(valor, nodo.derecha)
        }
    }
}
export default ArbolBinario
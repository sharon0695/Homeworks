import Nodo from "./Nodo";

class ArbolBinario {
    raiz: Nodo | null;

    constructor() {
        this.raiz = null;
    }

    insertar(valor: number): void {
        const nuevoNodo = new Nodo(valor);
        if(!this.raiz) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual: Nodo= this.raiz;
        while(true) {
            if(valor < actual.valor) {
                if(!actual.izquierda) {
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda;
            } else {
                if(!actual.derecha) {
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha;
            }
        }
    }

    preorden(nodo: Nodo | null): void {
        if(!nodo) return;
        console.log(nodo.valor);
        this.preorden(nodo.izquierda);
        this.preorden(nodo.derecha);
    }

    inorden(nodo: Nodo | null): void {
        if(!nodo) return;
        this.inorden(nodo.izquierda);
        console.log(nodo.valor);
        this.inorden(nodo.derecha);
    }

    postorden(nodo: Nodo | null): void {
        if(!nodo) return;
        this.postorden(nodo.izquierda);
        this.postorden(nodo.derecha);
        console.log(nodo.valor);
    }

    buscar(valor:number, nodo: Nodo | null = this.raiz): boolean {
        if(!nodo) return false;
        if(nodo.valor === valor) return true;

        if(valor < nodo.valor) {
            return this.buscar(valor, nodo.izquierda);
        } else {
            return this.buscar(valor, nodo.derecha);
        }
    }
}

export default ArbolBinario;
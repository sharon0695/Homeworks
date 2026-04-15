import { TreeNode, type NodeType } from "./TreeNode";

class ArbolNario {
    raiz: TreeNode | null;
  
    constructor() {
      this.raiz = null;
    }
  
    insert(
      name: string,
      type: NodeType,
      parentId: string | null,
      createdBy: string,
      id?: string
    ): TreeNode {
      const nuevoNodo = new TreeNode(name, type, parentId, createdBy, id);
  
      if (!this.raiz) {
        if (parentId !== null) {
          throw new Error("No existe raíz para asignar padre");
        }
        this.raiz = nuevoNodo;
        return nuevoNodo;
      }
  
      const parent = this.findById(parentId!);
      if (!parent) {
        throw new Error("Padre no encontrado");
      }

      if (parent.type === "file") {
        throw new Error("No se pueden agregar hijos a un archivo");
      }
  
      parent.children.push(nuevoNodo);
      return nuevoNodo;
    }
  
    findById(id: string): TreeNode | null {
      if (!this.raiz) return null;
  
      return this._findRecursive(this.raiz, id);
    }
  
    private _findRecursive(nodo: TreeNode, id: string): TreeNode | null {
      if (nodo.id === id) return nodo;
  
      for (const child of nodo.children) {
        const found = this._findRecursive(child, id);
        if (found) return found;
      }
  
      return null;
    }
  
    delete(id: string): boolean {
      if (!this.raiz) return false;
      if (this.raiz.id === id) {
        this.raiz = null;
        return true;
      }  
      return this._deleteRecursive(this.raiz, id);
    }
  
    private _deleteRecursive(nodo: TreeNode, id: string): boolean {
      const index = nodo.children.findIndex(child => child.id === id);
  
      if (index !== -1) {
        nodo.children.splice(index, 1);
        return true;
      }
  
      for (const child of nodo.children) {
        const deleted = this._deleteRecursive(child, id);
        if (deleted) return true;
      }
  
      return false;
    }
  
    traverse(): TreeNode[] {
      const result: TreeNode[] = [];
  
      if (!this.raiz) return result;
  
      this._traverseRecursive(this.raiz, result);
      return result;
    }
  
    private _traverseRecursive(nodo: TreeNode, result: TreeNode[]) {
      result.push(nodo);
  
      for (const child of nodo.children) {
        this._traverseRecursive(child, result);
      }
    }
  
    buildFromList(nodes: TreeNode[]) {
      const map = new Map<string, TreeNode>();
  
      this.raiz = null;
  
      nodes.forEach(n => {
        map.set(
          n.id,
          new TreeNode(n.name, n.type, n.parentId, n.createdBy, n.id)
        );
      });
      map.forEach(nodo => {
        if (nodo.parentId === null) {
          this.raiz = nodo;
        } else {
          const parent = map.get(nodo.parentId);
          if (parent && parent.type === "folder") {
            parent.children.push(nodo);
          }
        }
      });
    }
  
    toList(): TreeNode[] {
      return this.traverse().map(n => ({
        ...n,
        children: [] 
      }));
    }
  }

export { ArbolNario };
import { TreeNode } from "./TreeNode";

class NaryTree<T> {
    root: TreeNode<T> | null=null

    constructor() {
        this.root = null;
    }
    /*constructor que recibe un valor para la raíz
    constructor(rootValue: T) {
        this.root = new TreeNode(rootValue);
    }*/

    find(value: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
        if (!node) return null;
        if (node.value === value) return node;

        for (const child of node.children.toArray()) {
            const result = this.find(value, child);
            if (result) return result;
        }
        return null;
    }

    insert(parentValue: T | null, value: T): boolean {
        //árbol sin raíz
        if (!this.root) {
            this.root = new TreeNode(value);
            return true;
        }
        if(parentValue === null) return false; //si se intenta insertar un nodo sin padre en un árbol con raíz
        const parent = this.find(parentValue);
        if (!parent) return false;

        parent.addChild(new TreeNode(value));
        return true;
    }

    clone(): NaryTree<T> {
        const newTree = new NaryTree<T>();
        const cloneNode = (node: TreeNode<T>): TreeNode<T> => {
            const newNode = new TreeNode(node.value);
            for (const child of node.children.toArray()) {
                newNode.addChild(cloneNode(child));
            }
            return newNode;
        };

        if (this.root) {
            newTree.root = cloneNode(this.root);
        }

        return newTree;
    }
}

export { NaryTree }
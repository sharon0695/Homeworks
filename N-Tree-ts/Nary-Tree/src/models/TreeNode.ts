import { LinkedList } from "./LinkedList";

class TreeNode<T> {
    value: T
    children: LinkedList<TreeNode<T>>

    constructor(value: T) {
        this.value = value;
        this.children = new LinkedList();
    }

    addChild(child: TreeNode<T>) {
        this.children.append(child);
    }
}

export { TreeNode }
class TreeNode {
    value: string
    children: TreeNode[]

    constructor(value: string) {
        this.value = value
        this.children = []
    }

    addChild(child: TreeNode) {
        this.children.push(child)
    }
}

export default TreeNode;
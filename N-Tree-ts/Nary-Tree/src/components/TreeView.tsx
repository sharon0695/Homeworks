import { TreeNode } from "../models/TreeNode";

interface Props {
    node: TreeNode<string>
}

const TreeView = ({ node }: Props) => {
    return (
        <ul >
            <li>
                {node.value}
                <ul>
                    {node.children.toArray().map((child, index) => (
                        <TreeView key={index} node={child} />
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default TreeView;
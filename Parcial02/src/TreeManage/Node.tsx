import type { TreeNode } from "../models/TreeNode";

type Props = {
  node: TreeNode;
};

const Node = ({ node }: Props) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        {node.type === "folder" ? "📁" : "📄"} {node.name}
      </div>

      {node.children.map(child => (
        <Node key={child.id} node={child} />
      ))}
    </div>
  );
};

export default Node;
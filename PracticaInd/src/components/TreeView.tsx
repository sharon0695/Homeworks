import TreeNode from "../models/Tree";

type Props = {
  node: TreeNode;
};

const TreeView = ({ node }: Props) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{node.value}</div>

      {node.children.map((child, index) => (
        <TreeView key={index} node={child} />
      ))}
    </div>
  );
};

export default TreeView;
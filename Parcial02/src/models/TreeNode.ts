export type NodeType = "file" | "folder";

export class TreeNode {
  id: string;
  name: string;
  type: NodeType;
  parentId: string | null;
  children: TreeNode[];
  createdBy: string;

  constructor(
    name: string,
    type: NodeType,
    parentId: string | null,
    createdBy: string,
    id?: string
  ) {
    this.id = id || crypto.randomUUID();
    this.name = name;
    this.type = type;
    this.parentId = parentId;
    this.createdBy = createdBy;
    this.children = [];
  }
}

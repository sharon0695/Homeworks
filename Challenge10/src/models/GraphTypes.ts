export type NodeType = "person" | "city";

export interface BaseNode {
  id: string;
  type: NodeType;
}

export interface PersonNode extends BaseNode {
  type: "person";
  age: number;
}

export interface CityNode extends BaseNode {
  type: "city";
}

export type GraphNode = {
  id: string;
  type: "person" | "city";
  age?: number;
};

type GraphLink = {
  source: string;
  target: string;
};

export type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};
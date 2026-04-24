import type { GraphNode, GraphData, PersonNode } from "./GraphTypes";

export class Graph {
  private nodes: Map<string, GraphNode>;
  private adjList: Map<string, string[]>;

  constructor() {
    this.nodes = new Map();
    this.adjList = new Map();
  }

  addNode(node: GraphNode) {
    this.nodes.set(node.id, node);
    this.adjList.set(node.id, []);
  }

  addEdge(personId: string, cityId: string) {
    this.adjList.get(personId)?.push(cityId);
  }

  getPeopleByCity(cityId: string): PersonNode[] {
    const result: PersonNode[] = [];

    for (const [nodeId, connections] of this.adjList.entries()) {
      const node = this.nodes.get(nodeId);

      if (node?.type === "person" && connections.includes(cityId)) {
        result.push(node as PersonNode            
        );
      }
    }

    return result;
  }

  getGraphData(): GraphData {
    const nodes = Array.from(this.nodes.values()).map(n => ({
      id: n.id,
      type: n.type,
      age: n.type === "person" ? n.age : undefined
    }));

    const links: { source: string; target: string }[] = [];

    this.adjList.forEach((targets, source) => {
      targets.forEach(target => {
        links.push({ source, target });
      });
    });

    return { nodes, links };
  }
}
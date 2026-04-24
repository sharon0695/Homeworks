import { Graph } from "../models/Graph";

const graph = new Graph();

// ciudades
graph.addNode({ id: "Cali", type: "city" });
graph.addNode({ id: "Bogota", type: "city" });
graph.addNode({ id: "Medellin", type: "city" });

// personas
graph.addNode({ id: "Marta", type: "person", age: 25 });
graph.addNode({ id: "Catalina", type: "person", age: 30 });
graph.addNode({ id: "Carlos", type: "person", age: 28 });
graph.addNode({ id: "Sharon", type: "person", age: 19 });
graph.addNode({ id: "Nicolás", type: "person", age: 21 });
graph.addNode({ id: "Sebastián", type: "person", age: 24 });

// relaciones
graph.addEdge("Marta", "Cali");
graph.addEdge("Carlos", "Cali");
graph.addEdge("Catalina", "Bogota");
graph.addEdge("Sharon", "Medellin");
graph.addEdge("Nicolás", "Medellin");
graph.addEdge("Sebastián", "Medellin");

export default graph;
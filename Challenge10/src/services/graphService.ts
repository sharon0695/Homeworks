import { Graph } from "../models/Graph";

export function getPeopleByCity(graph: Graph, cityId: string) {
  return graph.getPeopleByCity(cityId);
}
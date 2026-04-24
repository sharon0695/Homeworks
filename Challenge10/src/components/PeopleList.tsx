import type { Graph } from "../models/Graph";
import { getPeopleByCity } from "../services/graphService";

type Props = {
  graph: Graph;
  city: string;
};

export default function PeopleList({ graph, city }: Props) {
  const people = getPeopleByCity(graph, city);

  return (
    <div>
      <h2>Personas en {city}</h2>
      <ul>
        {people.map(p => (
          <li key={p.id}>
            {p.id} - {p.age} años
          </li>
        ))}
      </ul>
    </div>
  );
}
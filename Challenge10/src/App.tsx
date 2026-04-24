import { useState } from "react";
import GraphView from "./components/GraphView";
import PeopleList from "./components/PeopleList";
import graph from "./data/graphData";

export default function App() {
  const [graphh] = useState(graph);
  const [selectedCity, setSelectedCity] = useState("Cali");

  return (
    <div>
      <h1>Friends & Cities Graph</h1>
      <h2>Busca las personas que se encuentran en tu ciudad</h2>
      <select className="select-value"
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
      >
        <option value="Cali">Cali</option>
        <option value="Bogota">Bogota</option>
        <option value="Medellin">Medellin</option>
      </select>

      <PeopleList graph={graphh} city={selectedCity} />

      <GraphView data={graphh.getGraphData()} />
    </div>
  );
}
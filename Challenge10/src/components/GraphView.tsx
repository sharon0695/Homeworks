import ForceGraph2D,{
  type GraphData as FGGraphData, type NodeObject
} from "react-force-graph-2d";

import type { GraphNode } from "../models/GraphTypes";
import "./style/graph.css"

type CustomNode = NodeObject<GraphNode>;
type CustomLink = {source: string; target: string;};

type Props = {
  data: FGGraphData<CustomNode, CustomLink>;
};

export default function GraphView({ data }: Props) {
  return (
    <div className="graph-container">
      <ForceGraph2D
        graphData={data}
        nodeLabel={(node: GraphNode) =>
          node.type === "person"
            ? `${node.id} (${node.age} años)`
            : node.id
        }
        nodeColor={(node: GraphNode) =>
          node.type === "city" ? "orange" : "skyblue"
        }
        nodeVal={(node: GraphNode) => (node.type === "city" ? 8 : 5)}
        nodeCanvasObject={(node: CustomNode, ctx, globalScale) => {
            const label = node.id;

            const size = node.type === "city" ? 10 : 7;
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI);

            ctx.fillStyle =
                node.type === "city" ? "#f59e0b" : "#38bdf8";

            ctx.fill();

            ctx.strokeStyle = "#0f172a";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = "#111827";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(label, node.x!, node.y! - size - 6);
            }}
        linkDirectionalArrowLength={0}
      />
    </div>
  );
}
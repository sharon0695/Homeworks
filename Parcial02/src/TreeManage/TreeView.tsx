import { ArbolNario } from "../models/NaryTree";
import Node from "./Node";

type Props = {
  tree: ArbolNario;
};

const TreeView = ({ tree }: Props) => {
  if (!tree.raiz) return <p>No hay datos</p>;

  return (
    <div>
      <Node node={tree.raiz} />
    </div>
  );
};

export default TreeView;
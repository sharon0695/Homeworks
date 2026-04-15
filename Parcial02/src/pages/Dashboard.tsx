import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useTree } from "../hooks/useTree";
import TreeView from "../TreeManage/TreeView";
import FilesExplorer from "./FilesExplorer";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { tree, addNode, loading } = useTree(user?.email || null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); 
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  if (loading) return <p>Cargando... esto puede tomar varios segundos</p>;

  const nodes = tree.traverse();

  return (
    <div className="dashboard">
        <div className="header">
            <h2>Explorador de archivos</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      <FilesExplorer addNode={addNode} treeNodes={nodes} />

      <TreeView tree={tree} />
    </div>
  );
};

export default Dashboard;
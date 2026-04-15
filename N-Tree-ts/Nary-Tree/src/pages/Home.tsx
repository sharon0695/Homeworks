import  useTree  from "../hooks/useTree";
import TreeView from "../components/TreeView";
import AddNodeForm from "../components/AddNodeForm";
import SearchNode from "../components/SearchNode";

const Home = () => {
    const { tree } = useTree();

    return (
        <div>
            <h1>Árbol N-ario</h1>
            <AddNodeForm />
            <SearchNode />
            {tree?.root && <TreeView node={tree.root} />}
        </div>
    );
}

export default Home;
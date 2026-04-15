import { TreeProvider } from "./context/TreeContext";
import Home from "./pages/Home";

function App() {
  return (
    <TreeProvider>
      <Home />
    </TreeProvider>
  );
}

export default App;
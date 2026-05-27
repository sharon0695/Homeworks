import { MusicProvider } from "./context/MusicContext";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {

    return (

        <MusicProvider>

            <Dashboard />

        </MusicProvider>
    );
}

export default App;
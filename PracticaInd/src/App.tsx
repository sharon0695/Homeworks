import { AuthProvider } from "./context/AuthContext";
import { ClinicProvider } from "./context/ClinicContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <ClinicProvider>
        <Dashboard /> 
      </ClinicProvider>
    </AuthProvider>
  );
}

export default App;
import { Routes, Route, Navigate} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Biblioteca from './Library/Biblioteca';
import Cajero from './ATM/Cajero';

const App = () => {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/atmdata" element={<Cajero />} />
      </Route>
    </Routes>
    </AuthProvider>
  ) 
} 

export default App
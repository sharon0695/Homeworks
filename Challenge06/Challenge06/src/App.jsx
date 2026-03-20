import { Routes, Route, Link} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Biblioteca from './Library/Biblioteca';
import ATMdata from './ATM/ATMdata';

export const App = () => {
  return (
    <AuthProvider>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/atmdata" element={<ATMdata />} />
      </Route>
    </Routes>
    </AuthProvider>
  ) 
} 
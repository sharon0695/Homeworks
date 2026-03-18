import { Routes, Route, Link} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export const App = () => {
  return (
    <>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  )
}
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkedListPages from './pages/LinkedListPages';
import DoublyLinkedPage from './pages/DoublyLinkedPage';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/linked-list">Song Player</Link> | 
        <Link to="/doubly-linked">Browser History</Link>
      </nav>
      <Routes>
        <Route path="/linked-list" element={<LinkedListPages />} />
        <Route path="/doubly-linked" element={<DoublyLinkedPage />} />
      </Routes>
    </Router>
  );
}


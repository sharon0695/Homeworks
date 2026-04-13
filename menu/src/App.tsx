import menuTree from "./menu";
import MenuItem from "./MenuItem";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container">
      
      <div className="sidebar">
        {menuTree.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Settings/Profile" element={<Profile />} />
          <Route path="/Settings/Security" element={<Security />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Help/FAQ" element={<FAQ />} />
          <Route path="/Help/Contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
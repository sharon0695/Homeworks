import menu from"./menu"
import MenuItem from "./componentes/MenuItem"
import AppRoutes from "./router"

function App() {
  return (
    <div className="container">
      
      <div className="sidebar">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>

      <div className="content">
        <AppRoutes />
      </div>

    </div>
  );
}

export default App

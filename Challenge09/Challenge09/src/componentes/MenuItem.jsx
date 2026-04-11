import { NavLink } from "react-router-dom";
import { useState } from "react";

function MenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length > 0;

  return (
    <div className="menu-item">
      <div className="menu-title">
        {hasChildren && (
          <button
            className="arrow-btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {open ? "▼" : "▶"}
          </button>
        )}

        <NavLink
          to={item.link}
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          {item.titulo}
        </NavLink>
      </div>

      <div className={`submenu ${open ? "open" : ""}`}>
        {hasChildren && open &&
          item.children.map((child, i) => (
            <MenuItem key={i} item={child} />
          ))}
      </div>
    </div>
  );
}

export default MenuItem;
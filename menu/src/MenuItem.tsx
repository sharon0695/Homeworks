import {NavLink} from "react-router-dom"
import { useState } from "react"
import type { TreeNode } from "./type/NaryTree"

interface Props {
    item : TreeNode
}

function MenuItem({item} : Props) {
    const [open, setOpen] = useState<boolean>(false)
    const hasChildren = item.children?.length > 0

    return (
        <div className="menu-item">
            <div className="menu-title">
                {hasChildren &&(
                    <button className="arrow-btn"
                    onClick={() => setOpen(!open)}
                    >
                        {open ? "▼" : "▶"}
                    </button>
                )}
                <NavLink to={item.link} className={({isActive} : {isActive:boolean}) =>
                    isActive ? "menu-link active" : "menu-link"}
                >
                    {item.titulo}
                </NavLink>
            </div>
            <div className={`submenu ${open ? "open" : ""}`}>
                {hasChildren && open && item.children.map((child, i) => (
                    <MenuItem key={i} item={child} />
                ))}
            </div>
        </div>
    )
}

export default MenuItem
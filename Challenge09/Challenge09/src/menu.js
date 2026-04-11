import Home from "./pages/Home"
import About from "./pages/About"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import Security from "./pages/Security"
import Help from "./pages/Help"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"

const menu = [
    { titulo: "Inicio", 
        link: "/Home",
        component: Home,
        children: [] 
    },
    { titulo: "Acerca de", 
        link: "/About",
        component: About,
        children: []
    },
    { titulo: "Configuración",
        link: "/Settings",
        component: Settings,
        children: [
            { titulo: "Perfil",
                link: "/Settings/Profile",
                component: Profile,
                children: []
            },
            { titulo: "Seguridad",
                link: "/Settings/Security",
                component: Security,
                children: []
            }
        ]
    },
    { titulo: "Ayuda",
        link: "/Help",
        component: Help,
        children: [
            { titulo: "FAQ",
                link: "/Help/FAQ",
                component: FAQ,
                children: []
            },
            { titulo: "Contacto",
                link: "/Help/Contact",
                component: Contact,
                children: []
            }
        ]
    }
]
export default menu;                                
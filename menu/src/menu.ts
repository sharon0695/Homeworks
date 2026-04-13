import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import { TreeNode } from "./type/NaryTree";

const home = new TreeNode("Inicio", "/Home", Home);
const about = new TreeNode("Acerca de", "/About", About);
const settings = new TreeNode("Configuración", "/Settings", Settings);
const profile = new TreeNode("Perfil", "/Settings/Profile", Profile);
const security = new TreeNode("Seguridad", "/Settings/Security", Security);

settings.addChild(profile);
settings.addChild(security);

const help = new TreeNode("Ayuda", "/Help", Help);
const faq = new TreeNode("FAQ", "/Help/FAQ", FAQ);
const contact = new TreeNode("Contacto", "/Help/Contact", Contact);

help.addChild(faq);
help.addChild(contact);

const menuTree: TreeNode[] = [home, about, settings, help];

export default menuTree
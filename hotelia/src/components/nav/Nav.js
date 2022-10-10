import PropsNav from "./PropsNav.js";
import { Link } from "react-router-dom";
import imagen from "./Hotelia horizontal blanco.svg";
import "./Nav.css";
function Nav()
{
    return(
            <nav>
                <div class="logoQ">
                    <PropsNav
                    iconoQ="fa-solid fa-bars hamb"
                    imagenes={imagen}/>
                </div>
                <div class="menu">
                    <Link to="/" className="item">Inicio</Link>
                    <Link to="/listarAc/" className="item">Ubícanos</Link>
                    <Link to="/user/" className="item">Opiniones</Link>
                    <hr className="menu-hr" noshade=""/>
                    <Link to="/login" className="item"><button><PropsNav iconoQ="fa-solid fa-user"/>Iniciar Sesión</button></Link>
                </div>
            </nav>
        );
}
export default Nav;
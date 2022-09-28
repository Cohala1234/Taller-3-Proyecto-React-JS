import { Link } from "react-router-dom";
import imagen from "./Hotelia horizontal blanco.svg";
import "./Nav.css";
function Nav()
{
    return(
            <nav>
                <div class="logoQ">
                    <i className="fa-solid fa-bars hamb"></i>
                    <img src={imagen} alt="Logo Hotelia"/>
                </div>
                <div class="menu">
                    <Link to="/" className="item">Inicio</Link>
                    <Link to="/" className="item">Ubícanos</Link>
                    <Link to="/" className="item">Opiniones</Link>
                    <hr className="menu-hr" noshade=""/>
                    <Link to="/dashboard" className="item"><button ><i className="fa-solid fa-user"></i>Iniciar Sesión</button></Link>
                </div>
            </nav>
        );
}
export default Nav;
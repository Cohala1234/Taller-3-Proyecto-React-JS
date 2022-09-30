import "./Login.css"
import logov from './Hotelia-horizontal-negro.svg';
import { Link } from "react-router-dom";

function Login() {
    return(
            <div className="container-complete">
                <div className="container">
                        <div id="logo">
                            <img src={logov} alt="logoV" />
                        </div>
                    <div className="login">
                        <i className="fa-solid fa-user iconoQQ"></i>
                        <form action="#">
                            <div className="iniciosesion">
                                <div className="labe"><label for="">Usuario</label></div>
                                <input className="inpu" type="text"/>
                            </div>
                            <div className="iniciosesion">
                            <div className="labe"><label for="">Contraseña</label></div>
                            <input className="inpu" type="text"/>
                            </div>
                            <button id="boton"> <Link to="/dashboard" className="ingre">Ingresar</Link></button>
                            <p className="par">¿No tienes una cuenta?<Link to="/registro" className="ingr">Regístrate aquí.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    );
}       
export default Login;
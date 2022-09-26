import "./login.css"
import logov from './Hotelia-horizontal-negro.svg';


function Login() {
    return(
    <div className="container">
            <div id="logo">
                <a href=""><img src={logov}/></a>
            </div>
        <div className="login">
            <i className="fa-solid fa-user"></i>
            <form action="#">
                <div className="iniciosesion">
                    <label for="">Usuario</label>
                    <input type="text"/>
                </div>
                <div className="iniciosesion">
                    <label for="">Contraseña</label>
                    <input type="text"/>
                </div>
                <button id="boton"> <a href="dashboard.html">Ingresar</a></button>
                <p>¿No tienes una cuenta?<a href="registro.html">Regístrate aquí.</a></p>
            </form>
        </div>
    </div>
    );
}       

export default Login;
import "./Login.css"
import Cuadrito from "./Cuadrito";
import logtv from "./Hotelia-horizontal-negro.svg"

function Login() {
    return(
<div className="container-complete">
        <Cuadrito 
        logv={logtv}
        icono='fa-solid fa-user'
        text1='Usuario'
        text2='Contraseña'
        text3="Ingresar"
        text4="¿No tienes una cuenta?  "
        text5=" Registrate aqui..."
        />
</div>
    );
}       

export default Login;
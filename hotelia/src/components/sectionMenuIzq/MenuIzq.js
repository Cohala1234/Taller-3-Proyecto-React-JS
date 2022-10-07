import imagen5 from "./Hotelia horizontal blanco.svg";
import imagen6 from "./hotelia campana.svg";
import imagen7 from "./stock2.jpeg";
import { Link } from "react-router-dom";
import "https://kit.fontawesome.com/6131ecdde6.js"
import "./MenuIzq.css";
function MenuIzq()
{
    return(
            <section class="menuizq">
                <div class="menuizqarriba">
                    <div class="logo">
                            <img src={imagen5} alt="" class="desktop"/>
                            <img src={imagen6} alt="" class="mobile"/>
                    </div>
                    <div class="nombreCorreo">
                            <div class="fotoPerfil">
                                <img src={imagen7} alt="" id="foto"/>
                            </div>
                            <div>
                                <h3>Angie Vargas</h3>
                                <h4>angie@gmail.com</h4>
                            </div>
                    </div>         
                </div>
                <div class="opciones"> 
                    <div class="lista">
                            <a href="" class="link diseno"><i class="fa-solid fa-bed" id="icono"></i><p>Habitaciones</p></a>
                            <a href="" class="link diseno"><i class="fa-solid fa-bell-concierge" id="icono"></i><p>Reservas</p></a>
                            <a href="" class="link diseno"><i class="fa-solid fa-bed" id="icono"></i><p>Habitaciones</p></a>
                            <a href="" class="link diseno"><i class="fa-solid fa-bell-concierge" id="icono"></i><p>Habitaciones</p></a>
                    </div>
                    <div class="cerrarSesion">
                            <Link to="/" class="diseno"><i class="fa-solid fa-arrow-right-from-bracket" id="icono"></i><p>Cerrar Sesion</p></Link>
                    </div>
                </div>              
            </section>
        );
}
export default MenuIzq;
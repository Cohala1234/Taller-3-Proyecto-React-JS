import imagen9 from "./stock2.jpeg";
import "https://kit.fontawesome.com/6131ecdde6.js";
import "./MenuDer.css";
function MenuDer()
{
    return(
            <div class="menuder">
                <div class="contenedor">
                    <div class="tituloBienvenido">
                        <h2>Bienvenido, Angie Vargas</h2>
                    </div>
                    <div class="menuderabajo">
                        <div class="fotomenuder">
                            <img src={imagen9} alt=""/>
                            <div class="subirarchivos">
                                <i class="fa-solid fa-file-arrow-up icon_1"></i>
                                <i class="fa-solid fa-upload"></i>
                            </div>
                            <div class="password">
                                <a href="" class="password diseno"><h2>Cambiar contraseña</h2></a>
                            </div>
                        </div>
                        <div class="formularioDatos">
                            <form action="">
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Tipo de documento</label>
                                        <input type="text"/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">Número de documento</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Nombres</label>
                                        <input type="text"/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">Apellidos</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Fecha nacimiento</label>
                                        <input type="text"/>
                                    </div>
                                    <div class="formularioQ">
                                        <label for="">País de origen</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor2">
                                    <div class="formularioQ">
                                        <label for="">Género</label>
                                        <div class="radio">
                                            <label for="">Mujer</label>
                                            <input type="radio"/>
                                            <label for="">Hombre</label>
                                            <input type="radio"/>
                                            <label for="">Otro</label>
                                            <input type="radio"/>
                                        </div>
                                    </div>
                                    <div class="formularioQ separadorQ">
                                        <label for="">Teléfono de contacto</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor3">
                                    <div class="formulario">
                                        <label for="">Email</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="formularioQ">
                                    <div class="formularioQ">
                                        <a href="" class="diseno"><h2>Actualizar</h2></a>
                                    </div>
                                </div>
                                <div class="contenedor3">
                                    <div class="formularioQ">
                                        <label for="">Contraseña</label>
                                        <input type="text"/>
                                    </div>
                                    <div class="formularioQ separadorr">
                                        <label for="">Confirmar contraseña</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="contenedor3">
                                    <div class="formularioQ">
                                        <a href="" class="diseno"><h2>Cambiar</h2></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default MenuDer;
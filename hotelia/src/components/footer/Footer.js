import "./Footer.css";
import "https://kit.fontawesome.com/6131ecdde6.js"
function Footer()
{
    return(
            <footer class="footer-container">
                <div class="text-footer">
                    <div class="parrafo3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?</p>
                        <div class="redes">
                            <div class="red">
                                <i class="fa-brands fa-instagram"></i>     
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </div>  
                        </div>
                        <hr class="hr"/>
                    </div>
                    <div class="parrafo4">
                        <div class="icons">
                            <div>
                                <i class="fa-solid fa-location-dot"></i><p>Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-phone"></i><p>+57 601 4567899</p>
                            </div>
                        </div>
                        <hr class="hr"/>
                    </div>
                    <div class="parrafo5">
                        <div>
                            <p>Políticas de privacidad</p>
                        </div>
                        <div id="separador">
                            <p>Políticas de privacidad</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
}
export default Footer;
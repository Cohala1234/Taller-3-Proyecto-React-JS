import "./Footer.css"
import Descripcion from "./Des-Footer"
import Ubicacion from "./Ubi-Footer"
import Politicas from "./Poli-Footer"

function Footer() {
    return(
        <footer className="footer-container" id="footer-container">
            <div className="textos" id="textos">
                <div className="des" id="des">
                    <Descripcion
                    texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?'
                    instagram='fa-brands fa-instagram'
                    facebook='fa-brands fa-facebook-f'
                    twitter='fa-brands fa-twitter'
                    />
                </div>

                <div className="ubi" id="ubi">
                    <Ubicacion
                    ubi='fa-solid fa-location-dot'
                    text='AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA'
                    pho='fa-solid fa-phone'
                    text2='+57 601 4567899'
                    />
                </div>

                <div className="poli" id="poli">
                    <Politicas
                    tex='Políticas de privacidad'
                    tex2='Políticas de privacidad'
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
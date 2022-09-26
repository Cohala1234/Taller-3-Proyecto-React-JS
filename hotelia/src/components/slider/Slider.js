import imagen2 from "./slide1.jpg";
import imagen3 from "./Hotelia negro vertical.svg";
import "./Slider.css";
function Slider()
{
    return(
            <section class="slider">  
                <div class="contenido">
                    <img src={imagen2} id="pt"/>
                    <section id="banner">
                        <h4>Lorem ipsum dolor sit ameliter,<br/>
                        consectetur adipiscing elit</h4>
                </section>
                </div>  
                <section class="informacion">
                    <div class="text-log">
                        <div id="parrafo1">
                            <p>
                                Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en 
                                un contexo de lujo donde interactúan los negocios, el ocio y el descanso, gracias
                                a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina, centros 
                                comerciales, almacenes de lujo y amblemáticos parques para aprovechar la naturaleza 
                                antre la ciudad caminar y hacer un poco de deporte al aire libre están 
                                el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                                saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.
                            </p>
                        </div>
                        <div id="parrafo2">
                            <img src={imagen3} alt="logo"/>
                        </div>
                    </div>
                </section>
            </section>
        );
}
export default Slider;
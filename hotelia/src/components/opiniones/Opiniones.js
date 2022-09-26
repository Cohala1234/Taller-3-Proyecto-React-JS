import imagen4 from "./stock1.webp";
import "./Opiniones.css";
function Opiniones()
{
    return(
            <section class="opiniones">
            <div class="titulo">
                <h1>Nuestros usuarios dicen...</h1>
            </div>
            <div class="carrusel">   
                <div id="calificacion" >
                    <div class="nombre">
                        <img src={imagen4}/>
                        <div class="estrellas">
                            <h5>Diego rodriguez</h5>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.
                        </p>
                    </div>
                </div>
                <div id="calificacion" >
                    <div class="nombre">
                        <img src={imagen4}/>
                        <div class="estrellas">
                            <h5>Diana Garcia</h5>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.
                        </p>
                    </div>
                </div>
                <div id="calificacion" >
                    <div class="nombre">
                        <img src={imagen4}/>
                        <div class="estrellas">
                            <h5>Diego rodriguez</h5>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <p>
                            Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        );
}
export default Opiniones;
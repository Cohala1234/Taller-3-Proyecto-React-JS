import PropsPhoto from "./PropsPhoto.js";
import PropsNombre from "./PropsNombre.js";
import PropsIcono from "./PropsIcono.js";
import PropsTexto from "./PropsTexto";
import imagen4 from "./stock1.webp";
import "./Opiniones.css";
function Opiniones()
{
    return(
            <section id="opiniones" class="opiniones">
            <div class="titulo">
                <h1>Nuestros usuarios dicen...</h1>
            </div>
            <div class="carrusel">   
                <div id="calificacion" >
                    <div class="nombre">
                        <PropsPhoto 
                        photoo={imagen4}/>
                        <div class="estrellas">
                            <PropsNombre 
                            nombre="Diego Rodriguez"/>
                            <div class="arregloEstrellas">
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={false}/>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <PropsTexto 
                        descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum."/>
                    </div>
                </div>
                <div id="calificacion" >
                    <div class="nombre">
                        <PropsPhoto 
                        photoo={imagen4}/>
                        <div class="estrellas">
                            <PropsNombre 
                            nombre="Diego Rodriguez"/>
                            <div class="arregloEstrellas">
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={false}/>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <PropsTexto 
                        descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum."/>
                    </div>
                </div>
                <div id="calificacion" >
                    <div class="nombre">
                        <PropsPhoto 
                        photoo={imagen4}/>
                        <div class="estrellas">
                            <PropsNombre 
                            nombre="Diego Rodriguez"/>
                            <div class="arregloEstrellas">
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={true}/>
                                <PropsIcono 
                                iconoW={false}/>
                            </div>
                        </div>
                    </div>
                    <div class="descripcion">
                        <PropsTexto 
                        descripcion="Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum."/>
                    </div>
                </div>
            </div>
        </section>
        );
}
export default Opiniones;
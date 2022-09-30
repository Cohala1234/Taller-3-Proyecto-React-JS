import { Link } from "react-router-dom";
import "./ladoIzq.css"
function LadoIzq() {
    return(
        <div class="formulario">
                  <div class="tittle"><h1>Regístrate</h1></div>
                <div class="form">
                  <div class="doc">
                        <div id="info">
                              <label className="la" for="tip-doc">Tipo de documento</label>
                             <select name="tip-doc" id="tip-doc">
                              <option value="0">Escoja una opción</option>
                              <option value="1">Cédula</option>
                              <option value="2">Tarjeta de identidad</option>
                              <option value="3">Otro</option>
                        </select>
                        </div>
                        <div id="info">
                              <label className="la" for="num-doc">Número documento</label>
                              <input className="in" type="text" name="num-doc" placeholder="10000000"/>
                        </div> 
                  </div>
                  <div class="nam">
                        <div id="info">
                              <label className="la" for="nombres">Nombres</label>
                              <input className="in" type="text" name="nombres" placeholder="Nombres..."/>
                        </div>
                        <div id="info">
                              <label className="la" for="Apellidos">Apellidos</label>
                              <input className="in" type="text" name="Apellidos" placeholder="Apellidos..."/>
                        </div> 
                  </div>
                  <div class="nac">
                        <div id="info">
                              <label className="la" for="FecNac">Fecha de nacimiento</label>
                              <input className="in" type="date" name="FecNac"/>
                        </div>
                        <div id="info">
                              <div class="radio">
                              <label className="la" for="fecha">Género</label>
                              <input className="in" type="radio" name="genero"/>Mujer
                              <input className="in" type="radio" name="genero"/>Hombre
                              <input className="in" type="radio" name="genero"/>Otro
                              </div>
                        </div> 
                  </div>
                  <div class="em">
                        <div id="info">
                              <label className="la" for="Email">Email</label>
                              <input type="email" name="Email" placeholder="correo..."/>
                        </div>
                        <div id="info">
                              <label className="la" for="tel">Teléfono de contacto</label>
                              <input className="in" type="text" name="tel" placeholder="teléfono..."/>
                        </div> 
                  </div>
                  <div class="coun">
                        <div id="info">
                              <label className="la" for="país">País deorigen</label>
                              <select name="país" id="país">
                                    <option value="1">option1</option>
                                    <option value="2">option2</option>
                                    <option value="3">option3</option>
                                    <option value="4">option4</option>
                                    <option value="5">option5</option>
                              </select>
                        </div>
                        <div id="info">
                              <label className="la" for="photo">Foto</label>
                              <input className="in" type="text" name="photo" placeholder="selecionar archivo"/>
                        </div> 
                  </div>
                  <div class="pass">
                        <div id="info">
                              <label className="la" for="password">Contraseña</label>
                              <input className="in" type="password" name="password"/>
                        </div>
                        <div id="info">
                              <label className="la" for="password2">Confirmar contraseña</label>
                              <input className="in" type="password2" name="password2"/>
                        </div> 
                        </div>
                </div>
                <div className="terminos">
                  <p id="termino"><input type="checkbox"/>Términos y condiciones</p>
                  <Link to="/login" className="ing"><button>Ingresar</button></Link>
                </div>

        <div className="modalito" id="modalito">
            <div className="modal_cotainer" id="modal_container">
                <span id="close" className="material-symbols-outlined">X</span>
                <h1>Terminos y condiciones</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque atque, unde officiis sapiente quis aperiam quas perferendis odit ipsam velit exercitationem ratione repudiandae cupiditate tempore laborum nemo iusto, aliquam dolorem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis voluptatem inventore dolorem eum delectus ratione sapiente veritatis doloribus, ipsam laboriosam et dolorum velit ab fugit! Harum consequatur voluptates sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus laboriosam, qui sit accusantium iure fuga quos beatae illum, fugiat iste soluta incidunt, molestias id inventore? Pariatur suscipit error iure.</p>
            </div>
        </div>
    </div>
            
         );  

}

export default LadoIzq;
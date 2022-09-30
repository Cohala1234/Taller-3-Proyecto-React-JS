import "./ladoDere.css"
import logo from "./Hotelia-horizontal-blanco.svg"
function LadoDere() {
    return(
            <div className="logos">
                <div className="imga">
                  <img src={logo} alt="Loguitoo" />
                  <div className="bienvenidos">
                    <p>Eres más que bienvenido</p>
                  </div>
                  <div className="texts">
                    <p>un lugar en tu corazón</p>
                  </div>
                </div>
            </div>
    );
}

export default LadoDere;
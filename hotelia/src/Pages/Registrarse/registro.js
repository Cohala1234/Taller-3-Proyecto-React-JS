import "./registro.css"
import LadoDere from "../../Componentes/ladoDere/ladoDere.js";
import LadoIzq from "../../Componentes/ladoIzq/ladoIzq.js";

function Regristo() {
    return(
        <div className="Container" id="Container">
            <LadoDere />
            <LadoIzq />
        </div>
    );
}

export default Regristo;
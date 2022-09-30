import "./Registro.css"
import LadoDere from "../../components/ladoDere/ladoDere.js";
import LadoIzq from "../../components/ladoIzq/ladoIzq.js";

function Regristo() {
    return(
        <div className="Container" id="Container">
            <LadoDere />
            <LadoIzq />
        </div>
    );
}
export default Regristo;
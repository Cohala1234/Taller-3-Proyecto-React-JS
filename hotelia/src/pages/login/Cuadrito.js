import "./Cuadrito.css"
import {Link} from "react-router-dom";

function Cuadrito({logv, icono, text1, text2, text3,text4, text5 }) {
    return(
    <div className="container2">
            <div id="logo">
                <img src={logv} alt="logot" />
            </div>
        <div className="login">
            <i className={icono }></i>
            <form action="#">
                <div className="iniciosesion">
                    <div className="labe"><label for="">{text1}</label></div>
                    <input className="inpu" type="text"/>
                </div>
                <div className="iniciosesion">
                    <div className="labe"><label for="">{text2}</label></div>
                    <input className="inpu" type="text"/>
                </div>
                <button id="boton"> <Link to="/dashboard" className="ingre">{text3}</Link></button>
                <p className="par">{text4}<Link to="/registro" className="ingre">{text5}</Link></p>
            </form>
        </div>
    </div>
    );
}

export default Cuadrito;
import { Link } from "react-router-dom";
import ListHuesped from "./modal";
import "./edit.css";

function Edit()
{
    return(
        <>
            <Link to="/registro" className="tr">registrar Usuario</Link>
            <Link to="/user" className="ty">consultar Usuario</Link>
            <h1 className="r">Lista de Usuarios</h1>

            <ListHuesped/>
        </>
    );
}
export default Edit;
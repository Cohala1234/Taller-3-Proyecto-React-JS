import { Link } from "react-router-dom";
import ListUser from "../components/ListUser.js";
import "./User.css";

function Users()
{
    return(
        <>
            <Link to="/registro" className="re">registrar Usuario</Link>
            <Link to="/edit" className="ed">editar Usuario</Link>
            <h1 className="t">Lista Usuarios</h1>

            <ListUser />
        </>
    );
}
export default Users;
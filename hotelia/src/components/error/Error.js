import imagen9 from "./error404.jpeg";
import "./Error.css";
function Error()
{
    return(
            <section>
                <img id="error404" src={imagen9} alt="Error"/>
            </section>
        );
}
export default Error;
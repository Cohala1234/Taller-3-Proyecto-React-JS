import "./Des-Footer.css";

function Descripcion({texto,instagram,facebook,twitter}) {
    return(
        <div className="one_text" id="one_text">
            <p>{texto}</p>
                <div className="redes">
                    <div className="red">
                        <i className={instagram}></i>     
                        <i className={facebook}></i>
                        <i className={twitter}></i>           
                    </div>                       
                </div>
            <hr className="hr"/>
        </div>
    );
}

export default Descripcion;
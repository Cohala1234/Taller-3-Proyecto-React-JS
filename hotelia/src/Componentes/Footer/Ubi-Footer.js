import "./Ubi-Footer.css";

function Ubicacion({ubi,text,pho,text2}) {
    return(
        <div className="two_text">
            <div className="icons">
                <div>
                    <i className={ubi}></i><p>{text}</p>
                </div>
                <div>
                    <i className={pho}></i><p>{text2}</p>
                </div>
            </div>
            <hr className="hr"/>
        </div>
    );
}

export default Ubicacion;
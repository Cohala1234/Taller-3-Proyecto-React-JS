import "./Poli-Footer.css";

function Politicas({tex,tex2}) {
    return(
        <div classNaeme="three_text" id="three_text">
            <div id="sepa">
                <p>{tex}</p>
            </div>
            <div id="separador">
                <p>{tex2}</p>
            </div>
        </div>
    );
}

export default Politicas;
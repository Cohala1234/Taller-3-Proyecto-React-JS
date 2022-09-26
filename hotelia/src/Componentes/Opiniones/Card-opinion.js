import "./Card-opinion.css";


function CardOpinion ({imge,nombre,starts,no_start,texto}) {
    return(
    <div className="opin" id="opin">
        <div className="arri" id="arri">
            <img src={imge} alt="user" />
                <div className="nom" id="nom">
                        <h5>{nombre}</h5>
                    <div>
                        <i className={starts}></i>
                        <i className={starts}></i>
                        <i className={starts}></i>
                        <i className={starts}></i>
                        <i className={no_start}></i>
                    </div>
                </div>
        </div>
        <div className="text" id="text">
            <p>{texto}
            </p>
        </div>
    </div>
); 
}

export default CardOpinion;
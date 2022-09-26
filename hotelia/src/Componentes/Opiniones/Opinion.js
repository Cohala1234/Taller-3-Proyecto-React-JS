import "./Opinion.css";
import CardOpinion from "./Card-opinion";
import imgne from "./lollk.jpg"

function Opinion() {
    return(
        <section id="opinion">
            <div className="titulo"><h1>Nuestros usuarios dicen...</h1>
            </div>
            <div className="carOpinion">
                <CardOpinion
                imge={imgne}
                nombre='Diego rodriguez'
                starts='fa-solid fa-star'
                no_start='fa-regular fa-star'
                texto='Lorem ipsum dolor sit amet, consectet adipiscing elit.
                Elit quis enim ultricies ullamcorper.
                Nunc aenean auctor vel diam dictum.'
                />

                <CardOpinion
                imge={imgne}
                nombre='Diana Garcia'
                starts='fa-solid fa-star'
                no_start='fa-regular fa-star'
                texto='Lorem ipsum dolor sit amet, consectet adipiscing elit.
                Elit quis enim ultricies ullamcorper.
                Nunc aenean auctor vel diam dictum.'
                />

                <CardOpinion
                imge={imgne}
                nombre='Diego rodriguez'
                starts='fa-solid fa-star'
                no_start='fa-regular fa-star'
                texto='Lorem ipsum dolor sit amet, consectet adipiscing elit.
                Elit quis enim ultricies ullamcorper.
                Nunc aenean auctor vel diam dictum.'
                />
            </div>
        </section>
    );
}

export default Opinion;
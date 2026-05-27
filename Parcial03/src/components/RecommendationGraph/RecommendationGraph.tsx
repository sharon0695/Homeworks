import "../../styles/RecomPanel.scss";
import { useMusic } from "../../context/MusicContext";

export const RecommendationPanel = () => {

    const {
        query,
        recommendations,
        setQuery
    } = useMusic();

    return (

        <section className="recommendation">

            <h2>
                Recomendaciones
            </h2>

            {
                query.length === 0 && (

                    <p>
                        Busca una canción
                        para ver recomendaciones.
                    </p>
                )
            }

            {
                query.length > 0 &&
                recommendations.length === 0 && (

                    <p>
                        No hay recomendaciones.
                    </p>
                )
            }

            <div className="recommendation-list">

                {
                    recommendations.map(
                        (
                            recommendation,
                            index
                        ) => (

                            <button
                                key={index}

                                type="button"

                                className="
                                recommendation-card
                                "

                                onClick={() => {

                                    console.log(
                                        recommendation
                                    );

                                    setQuery(
                                        recommendation
                                    );
                                }}
                            >

                                {recommendation}

                            </button>
                        )
                    )
                }

            </div>

        </section>
    );
};
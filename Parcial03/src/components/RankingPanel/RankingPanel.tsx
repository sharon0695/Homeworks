import "../../styles/RankingPanel.scss";
import { useMusic } from "../../context/MusicContext";

export const RankingPanel = () => {

    const { topSongs } =
        useMusic();

    return (

        <section className="ranking">

            <h2>
                TOP Canciones
            </h2>

            <div className="ranking-list">

                {
                    topSongs.map(
                        (song, index) => (

                            <div
                                key={song.id}
                                className="ranking-card"
                            >

                                <span>
                                    #{index + 1}
                                </span>

                                <h3>
                                    {song.title}
                                </h3>

                                <p>
                                    {song.plays} plays
                                </p>

                            </div>
                        )
                    )
                }

            </div>

        </section>
    );
};
import "../../styles/SearchBar.scss";
import { useMusic } from "../../context/MusicContext";

export const SearchBar = () => {
    const {query,setQuery,suggestions} = useMusic();

    return (
        <section className="search">
            <h2>
                Buscar Canciones
            </h2>
            <input
                type="text"
                placeholder="Buscar canción..."
                value={query}
                onChange={(e)=>
                    setQuery(
                        e.target.value
                    )
                }
            />
            <div className="suggestions">
                {
                    query.length > 0 &&
                    suggestions.length === 0 && (

                        <p className="no-results">
                            No hay canciones
                            encontradas.
                        </p>
                    )
                }
                {
                    suggestions.map(
                        (
                            song,
                            index
                        ) => (
                            <button
                                key={index}
                                type="button" className="suggestion-card"
                                onClick={()=>
                                    setQuery(song)
                                }
                            >
                                {song}

                            </button>
                        )
                    )
                }
            </div>
        </section>
    );
};
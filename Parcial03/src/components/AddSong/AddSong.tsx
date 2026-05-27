import "../../styles/AddSong.scss";
import { useState } from "react";
import { useMusic } from "../../context/MusicContext";

export const AddSongForm = () => {
    const { addSong } = useMusic();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [plays, setPlays] = useState("");
    const [related, setRelated] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addSong({
            id: Date.now(),
            title,
            plays: Number(plays),
            related: related
                .split(",")
                .map(song =>
                    song.trim()
                )
        });

        setTitle("");
        setPlays("");
        setRelated("");
        setOpen(false);
    };

    return (
        <section className="add-song">
            <button
                className="toggle-btn"
                onClick={() =>
                    setOpen(!open)
                }
            >
                {open
                    ? "Cerrar"
                    : "+ Agregar canción"}

            </button>
            {
                open && (
                    <form
                        onSubmit={handleSubmit}>
                        <h2>
                            Nueva Canción
                        </h2>
                        <input
                            type="text"
                            placeholder="Título"
                            value={title}
                            onChange={(e) =>
                                setTitle(
                                    e.target.value
                                )
                            } />
                        <input
                            type="number"
                            placeholder="Plays"
                            value={plays}
                            onChange={(e) =>
                                setPlays(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="text"
                            placeholder="Relacionadas (separado por coma)"
                            value={related}
                            onChange={(e) =>
                                setRelated(
                                    e.target.value
                                )
                            }
                        />

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Guardar
                        </button>
                    </form>
                )
            }
        </section>
    );
};
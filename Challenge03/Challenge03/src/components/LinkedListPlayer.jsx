import { useState } from "react";
import { LinkedList } from "../utils/LinkedList";

const mockedSongs = [
    "She's So Gone",
    "Bloodline",
    "HANDS UP",
    "Starlight",
    "If  Only",
]

const list = new LinkedList();
mockedSongs.forEach(song => list.append(song));

export default function LinkedListPlayer() {
    const [ currentSong, setCurrentSong] = useState(list.getCurrent());

    const handleNext = () => {
        const next = list.nextSong();
        setCurrentSong(next);
    }

    const handleReset = () => {
        list.reset();
        setCurrentSong(list.getCurrent());
    }

    return (
        <div>
            <h2> Now Playing: {currentSong} </h2>
            <button onClick={handleNext}> Next Song </button>
            <button onClick={handleReset}> Reset Playlist </button>
        </div>
    )
}
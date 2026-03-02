import { useState } from "react";
import { LinkedList } from "../utils/LinkedList";

const mockedSongs = [
    "She's So Gone",
    "Bloodline",
    "HANDS UP",
    "Starlight",
    "If  Only",
    "The Way You Make Me Feel",
    "Don't Say You Love Me",
    "Who"
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
            <h2> Now Playing:  </h2>
            <h3> {currentSong} </h3> 
            <button onClick={handleNext}> Next Song </button>
            <button onClick={handleReset}> Reset Playlist </button>
        </div>
    )
}
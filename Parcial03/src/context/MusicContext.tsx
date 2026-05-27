import {createContext, type ReactNode,useContext,useState} from "react";
import type { Song } from "../type/Song";
import { useTrie } from "../hooks/useTrie";
import { useMaxHeap } from "../hooks/useMaxHeap";
import { useGraph } from "../hooks/useGraph";

interface MusicContextType {
    songs: Song[];
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    suggestions: string[];
    topSongs: Song[];
    recommendations: string[];
    addSong: (song: Song) => void;
}

const MusicContext =
createContext<MusicContextType | null>(null);
interface Props {
    children: ReactNode;
}

export const MusicProvider = ({children}: Props) => {
    const [query, setQuery] =
    useState("");
    const [songs, setSongs] =
    useState<Song[]>([
        {
            id:1,
            title:"Believer",
            plays:5200,
            related:[
                "Thunder",
                "Demons"
            ]
        },
        {
            id:2,
            title:"Thunder",
            plays:4700,
            related:[
                "Believer",
                "Radioactive"
            ]
        },
        {
            id:3,
            title:"Demons",
            plays:3900,
            related:[
                "Believer"
            ]
        },
        {
            id:4,
            title:"Shape Of You",
            plays:6800,
            related:[
                "Perfect"
            ]
        },
        {
            id:5,
            title:"Perfect",
            plays:6200,
            related:[
                "Shape Of You"
            ]
        },
        {
            id:6,
            title:"Dope",
            plays:7000,
            related:[
                "Idol"
            ]
        },
        {
            id:7,
            title:"Idol",
            plays:6900,
            related:[
                "Dope"
            ]
        },
        {
            id:8,
            title:"Por ti",
            plays:5800,
            related:[
                "Believer"
            ]
        }
    ]);

    const addSong = (
        song: Song
    ) => {
        setSongs(prev => [

            ...prev,
            song
        ]);
    };

    const {
        getSuggestions
    } = useTrie(
        songs.map(
            song => song.title
        )
    );

    const {
        getTopSongs
    } = useMaxHeap(
        songs
    );

    const {
        getRecommendations
    } = useGraph(
        songs
    );

    const suggestions =
        query.length > 0
        ? getSuggestions(query)
        : [];

    const recommendations =
        query.length > 0
        ? getRecommendations(query)
        : [];

    const topSongs =
        getTopSongs();

    return (

        <MusicContext.Provider
            value={{
                songs,
                query,
                setQuery,
                suggestions,
                topSongs,
                recommendations,
                addSong
            }}
        >

            {children}

        </MusicContext.Provider>
    );
};

export const useMusic = () => {

    const context =
    useContext(MusicContext);

    if (!context) {

        throw new Error(
            "useMusic debe usarse dentro de MusicProvider"
        );
    }

    return context;
};
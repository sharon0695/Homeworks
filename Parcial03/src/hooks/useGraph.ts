import { useMemo } from "react";
import { Graph } from "../structures/Graph";
import type { Song } from "../type/Song";

export const useGraph = (
    songs: Song[]
) => {

    const graph = useMemo(() => {

        const graphInstance =
        new Graph();

        songs.forEach(song => {

            song.related.forEach(
                relatedSong => {

                    graphInstance
                    .connectSongs(
                        song.title,
                        relatedSong
                    );
                }
            );
        });
        return graphInstance;
    }, [songs]);

    return {
        getRecommendations:
        (title:string)=>
            graph.getRecommendations(
                title
            )
    };
};
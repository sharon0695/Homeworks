import { useMemo } from "react";
import type { Song } from "../type/Song";
import { MaxHeap } from "../structures/MaxHeap";

export const useMaxHeap = (songs: Song[]) => {
    const heap = useMemo(() => {
        const heapInstance = new MaxHeap();
        songs.forEach(song => {
            heapInstance.insert(song);
        });
        return heapInstance;
    }, [songs]);

    const getTopSongs = () => {
        return heap.getAll();
    };

    return {
        getTopSongs
    };
};
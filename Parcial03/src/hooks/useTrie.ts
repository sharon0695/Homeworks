import { useMemo } from "react";
import { Trie } from "../structures/Trie";

export const useTrie = (songs: string[]) => {
    const trie = useMemo(() => {
        const trieInstance = new Trie();
        songs.forEach(song => {
            trieInstance.insert(song);
        });
        return trieInstance;
    }, [songs]);
    const exists = (title: string) => {
        return trie.search(title);
    };
    const getSuggestions = (prefix: string) => {
        return trie.suggestions(prefix);
    };
    return {
        exists,
        getSuggestions
    };
};
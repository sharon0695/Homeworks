class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord: boolean;
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

export class Trie {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;
        for (const char of word.toLowerCase()) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.endOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;
        for (const char of word.toLowerCase()) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return current.endOfWord;
    }

    suggestions(prefix: string): string[] {
        let current = this.root;
        for (const char of prefix.toLowerCase()) {
            if (!current.children.has(char)) {
                return [];
            }
            current = current.children.get(char)!;
        }
        const results: string[] = [];
        this.collectWords(current, prefix.toLowerCase(), results);
        return results;
    }

    private collectWords(
        node: TrieNode,
        word: string,
        results: string[]
    ): void {
        if (node.endOfWord) {
            results.push(word);
        }
        for (const [char, child] of node.children) {
            this.collectWords(
                child,
                word + char,
                results
            );
        }
    }
}
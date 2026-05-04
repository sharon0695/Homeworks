import MinHeap from "./Heap"
import { Product } from "./type"
class Node{
    value: string | null
    isEndOfWord: boolean
    children: Record<string, Node>
    products: Product[]

    constructor(value: string | null){
        this.value = value
        this.isEndOfWord = false
        this.children = {}
        this.products = []
    }
}

class Trie {
    root : Node
    constructor() {
        this.root = new Node(null)
    }

    insert(word: string, popu: number): void {
        let current = this.root

        for (let character of word) {
            if (current.children[character] === undefined) {
                current.children[character] = new Node(character)
            }
            current = current.children[character]
        }
        current.isEndOfWord = true
        current.products.push({ name: word, popularity: popu })
    }

    searchByPrefix(prefix: string): Node | null {
        let current = this.root
        for (let character of prefix) {
            if (current.children[character] === undefined) {
                return null
            }
            current = current.children[character]
        }
        return current
    }

    collectProducts(node: Node | null, result: Product[]): void {
        if (!node) return

        if (node.products.length > 0) {
            result.push(...node.products)
        }

        for (let child in node.children) {
            this.collectProducts(node.children[child], result)
        }
    }

    searchTopK(prefix: string, k:number): Product[] {
        const node = this.searchByPrefix(prefix)
        if (!node) return []

        const products: [] = []
        this.collectProducts(node, products)

        const heap = new MinHeap()

        for (let product of products) {
            heap.push(product)

            if (heap.size() > k) {
                heap.pop()
            }
        }

        return heap.toArray().sort((a, b) => b.popularity - a.popularity)
    }
}

export default Trie
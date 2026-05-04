import Trie from "./structures/Trie"

const trie = new Trie()

trie.insert("air max", 90)
trie.insert("air force", 95)
trie.insert("air jordan", 85)
trie.insert("adidas boost", 88)
trie.insert("adidas samba", 75)
trie.insert("air more", 60)

console.log(trie.searchTopK("air", 2))

export default trie
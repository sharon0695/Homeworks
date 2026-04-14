class Stack<T> {
    private items: T[] = [];

    push(item: T){
        this.items.push(item)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    getAll(){
        return this.items
    }
}

export default Stack;
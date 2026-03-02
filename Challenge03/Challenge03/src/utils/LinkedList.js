
export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.current = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.current = this.head;
            return;
        }
        let node = this.head;
        while (node.next) node = node.next;
        node.next = newNode;
    }

    nextSong() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
        }
        return this.current?.value;
    }

    reset() {
        this.current = this.head;
    }

    getCurrent() {
        return this.current?.value;
    }
}
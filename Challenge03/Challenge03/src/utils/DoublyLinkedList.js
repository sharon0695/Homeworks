
export class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    append(value) {
        const node = new DNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.current = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    next() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
        }
        return this.current?.value;
    }

    prev() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
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
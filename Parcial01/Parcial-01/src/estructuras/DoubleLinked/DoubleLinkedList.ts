import DNode from "./DNode";

class DoubleLinkedList<T> {
    head: DNode<T> | null = null;
    tail: DNode<T> | null = null;
    length: number = 0;

    append(value: T): void {
        const newNode = new DNode(value);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }

        this.length++;
    }


    next(): void {
        let current: DNode<T> | null = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    atras(): void {
        let current: DNode<T> | null = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

export default DoubleLinkedList;
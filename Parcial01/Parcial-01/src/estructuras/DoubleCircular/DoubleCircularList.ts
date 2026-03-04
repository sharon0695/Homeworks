import DCNode from "./DCNode";

class DoubleCircularList<T> {
    head: DCNode<T> | null = null;
    tail: DCNode<T> | null = null;
    length: number = 0;

    append(value: T): void {
        const newNode = new DCNode<T>(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail!.next = newNode;
            this.head!.prev = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    atras(): T[] {
        const result: T[] = [];
        if (!this.head) return result;

        let current = this.head;
        do {
            result.push(current.value);
            current = current.next!;
        } while (current !== this.head);
        return result;
    }

    siguiente(): T[] {
        const result: T[] = [];
        if (!this.tail) return result;

        let current = this.tail;
        do {
            result.push(current.value);
            current = current.prev!;
        } while (current !== this.tail);
        return result;
    }
   
}

export default DoubleCircularList;
import Node from "./Node";

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.current = this.head;
        } else {
            this.tail.next = newNode;            
        }
        this.tail = newNode;
        this.length++;
    }

    next() {
        if (this.current && this.current.next) {
            this.current = this.current.next;            
        }
        return this.current;
    }

    reset(){
        this.current = this.head;
    }

    removeByCode(code) {
        if (!this.head) return;
        if (this.head.value.code === code) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
                this.current = null;
            } else {
                this.current = this.head;                                                               
            }
            this.length--;
            return;
        }
        let node = this.head;
        while (node.next && node.next.value.code !== code) {
            node = node.next;
        }
        if (node.next) {
            const removedNode = node.next;
            if (removedNode === this.tail) {
                this.tail = node;
            }
            if (removedNode === this.current) {
                this.current = removedNode.next || this.head; 
            }
            node.next = removedNode.next;
            this.length--;
        }
    }

    toArray() {
        const array = [];
        let current = this.head;
        while(current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}
export default LinkedList;
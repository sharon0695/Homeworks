import CNode from "./CNode";

  class CircularLinkedList<T> {
    head: CNode<T> | null = null;
    tail: CNode<T> | null = null;
    length: number = 0;
  
    append(value: T): void {
      const newNode = new CNode(value);
  
      if (!this.head) {
        this.head = this.tail = newNode;
        newNode.next = this.head; 
      } else {
        if (this.tail) this.tail.next = newNode;
        newNode.next = this.head; 
        this.tail = newNode;
      }
  
      this.length++;
    }

  rotate(): void {
    if (this.head) {
      this.tail = this.head; 
      this.head = this.head.next; 
    }
  }
  
  next(): T | null {
    if (!this.head) return null;
    this.tail = this.head; 
    this.head = this.head.next; 
    return this.head?.value || null;
}

}

export default CircularLinkedList;
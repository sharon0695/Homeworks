import Node from "./Node";

  class LinkedList<T extends { turno: string }> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    current: Node<T> | null = null;
    length: number = 0;
  
    append(value: T): void {
      const newNode = new Node<T>(value);
      if (!this.head) {
        this.head = this.tail = newNode;
        this.current = this.head;
      } else if(this.tail) {
        this.tail.next = newNode;
      } 
      this.tail = newNode;
      this.length++;
    }
  
    remove(turno: string): void {
      if (!this.head) return;
  
      if (this.head.value.turno === turno) {
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.length--;
        return;
      }
  
      let currentt = this.head;
      while (currentt.next && currentt.next.value.turno !== turno) {
        currentt = currentt.next;
      }
  
      if (currentt.next) {
        const toRemove = currentt.next;
        if(toRemove === this.tail) {
          this.tail = currentt;
        }
        if(toRemove === this.current){
          this.current = toRemove.next || this.head;
        }

        currentt.next = toRemove.next;
        this.length--;
        return;
      }
  
      return; 
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
export default LinkedList;
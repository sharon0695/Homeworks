class CNode<T> {
    value: T;
    next: CNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
}

export default CNode;
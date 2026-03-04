class DCNode<T> {
    value: T;
    next: DCNode<T> | null;
    prev: DCNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
export default DCNode;
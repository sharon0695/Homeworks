import ATMdata from "./ATM";

class Queue {
    private items: any[];
    constructor(){
        this.items = [];
    }

    enqueue(item:any){
        this.items.push(item);
    }

    dequeue(){
        return this.items.length > 0 ? this.items.shift() : null;
    }

    peek(){
        return this.items.length > 0 ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    print(){
        this.items.forEach(item => {
            console.log(item);
        })
    }

    getAll(){
        return this.items;
    }
}

const queue = new Queue();
queue.enqueue(new ATMdata("Alan Basante", 100, new Date()));
queue.enqueue(new ATMdata("Maria Perez", 250, new Date()));
queue.enqueue(new ATMdata("Sharon Rivera", 180, new Date()));
queue.enqueue(new ATMdata("Samuel Moliña", 430, new Date()));
queue.enqueue(new ATMdata("Juanito Alimaña", 320, new Date()));

export default Queue;
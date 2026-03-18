import Book from "./Book";

class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek(){
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        this.items.slice().reverse().forEach(item => {
            console.log(item);
        })
    }
    getAll(){
        return this.items.slice().reverse();
    }
}

const stack = new Stack();
stack.push(new Book("The Great Gatsby", "978-0743273565", "F. Scott Fitzgerald", "Scribner"));
stack.push(new Book("To Kill a Mockingbird", "978-0060935467", "Harper Lee", "Harper Perennial Modern Classics"));
stack.push(new Book("1984", "978-0451524935", "George Orwell", "Signet Classic"));
stack.push(new Book("Pride and Prejudice", "978-1503290563", "Jane Austen", "CreateSpace Independent Publishing Platform"));
stack.push(new Book("The Catcher in the Rye", "978-0316769488", "J.D. Salinger", "Little, Brown and Company"));

export default stack;
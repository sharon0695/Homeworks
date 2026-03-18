import ATMdata from "./ATMdata";

export class Queue {

  private items: ATMdata[];

  constructor() {
    this.items = [];
  }

  enqueue(atmData: ATMdata): void {
    this.items.push(atmData);
  }

  dequeue(): ATMdata | undefined {
    return this.items.shift();
  }

  getAll(): ATMdata[] {
    return [...this.items];
  }

}
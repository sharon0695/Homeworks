import type { Song } from "../type/Song";

export class MaxHeap {
    private heap: Song[];
    constructor() {
        this.heap = [];
    }

    insert(song: Song): void {
        this.heap.push(song);
        this.heapifyUp();
    }

    getTop(): Song | null {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    extractMax(): Song | null {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return max;
    }

    getAll(): Song[] {
        return [...this.heap]
            .sort((a, b) => b.plays - a.plays);
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex =
                Math.floor((index - 1) / 2);
            if (
                this.heap[parentIndex].plays >=
                this.heap[index].plays
            ) {
                break;
            }
            [
                this.heap[parentIndex],
                this.heap[index]
            ] = [
                this.heap[index],
                this.heap[parentIndex]
            ];
            index = parentIndex;
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (true) {
            const left = (2 * index) + 1;
            const right = (2 * index) + 2;
            let largest = index;

            if (
                left < this.heap.length &&
                this.heap[left].plays >
                this.heap[largest].plays
            ) {largest = left;}
            if (
                right < this.heap.length &&
                this.heap[right].plays >
                this.heap[largest].plays
            ) {largest = right;}
            if (largest === index) {
                break;
            }
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}
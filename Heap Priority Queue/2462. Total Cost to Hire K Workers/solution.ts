function totalCost(costs: number[], k: number, candidates: number): number {
    const n = costs.length;
    if (n === 0 || k === 0) return 0;
    if (k > n) return -1; 

    if (n === 1) return costs[0]; 

    const leftHeap = new Heaps.MinPriorityQueue((a, b) => a - b); 
    const rightHeap = new Heaps.MinPriorityQueue((a, b) => a - b); 

    const actualCandidates = Math.min(candidates, Math.floor(n / 2));


    for (let i = 0; i < actualCandidates; i++) {
        leftHeap.enqueue(costs[i]);
        rightHeap.enqueue(costs[n - 1 - i]);
    }

    let leftPointer = actualCandidates;
    let rightPointer = n - 1 - actualCandidates;

    let totalCost = 0;
    for (let i = 0; i < k; i++) {
        const leftCost = leftHeap.front();
        const rightCost = rightHeap.front();

        if (leftCost === undefined && rightCost === undefined) {
            break;
        }

        if (rightCost !== undefined && (leftCost === undefined || rightCost < leftCost)) {
            totalCost += rightHeap.dequeue()!;
            if (rightPointer >= leftPointer) {
                rightHeap.enqueue(costs[rightPointer--]);
            }
        } else {
            totalCost += leftHeap.dequeue()!;
            if (leftPointer <= rightPointer) {
                leftHeap.enqueue(costs[leftPointer++]);
            }
        }
    }

    return totalCost;
}

namespace Heaps {
    export class MinPriorityQueue {
        private data: number[] = [];
        private compare: (a: number, b: number) => number;

        constructor(compareFunction: (a: number, b: number) => number) {
            this.compare = compareFunction;
        }

        enqueue(element: number) {
            this.data.push(element);
            this.heapifyUp(this.data.length - 1);
        }

        dequeue() {
            if (this.isEmpty()) {
                return undefined;
            }

            const root = this.data[0];
            const last = this.data.pop()!;

            if (this.data.length > 0) {
                this.data[0] = last;
                this.heapifyDown(0);
            }

            return root;
        }

        front() {
            return this.data.length > 0 ? this.data[0] : undefined;
        }

        isEmpty() {
            return this.data.length === 0;
        }

        private heapifyUp(index: number) {
            const { data, compare } = this;
            const parent = Math.floor((index - 1) / 2);

            if (parent >= 0 && compare(data[parent], data[index]) > 0) {
                this.swap(index, parent);
                this.heapifyUp(parent);
            }
        }

        private heapifyDown(index: number) {
            const { data, compare } = this;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let minIndex = index;

            if (left < data.length && compare(data[left], data[minIndex]) < 0) {
                minIndex = left;
            }

            if (right < data.length && compare(data[right], data[minIndex]) < 0) {
                minIndex = right;
            }

            if (minIndex !== index) {
                this.swap(index, minIndex);
                this.heapifyDown(minIndex);
            }
        }

        private swap(i: number, j: number) {
            const temp = this.data[i];
            this.data[i] = this.data[j];
            this.data[j] = temp;
        }
    }
}
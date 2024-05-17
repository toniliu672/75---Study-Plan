class SmallestInfiniteSet {
    private available: Set<number>;
    private unavailable: Set<number>;

    constructor() {
        this.available = new Set(Array.from({ length: 1000 }, (_, i) => i + 1));
        this.unavailable = new Set();
    }

    popSmallest(): number {
        if (this.available.size === 0) {
            return -1;
        }
        const smallest = Math.min(...this.available);
        this.available.delete(smallest);
        this.unavailable.add(smallest);
        return smallest;
    }

    addBack(num: number): void {
        if (this.unavailable.has(num)) {
            this.unavailable.delete(num);
            this.available.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
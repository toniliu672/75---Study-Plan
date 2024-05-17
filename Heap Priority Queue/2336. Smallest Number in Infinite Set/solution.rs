use std::collections::BTreeSet;

struct SmallestInfiniteSet {
    available: BTreeSet<i32>,
    unavailable: BTreeSet<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SmallestInfiniteSet {
    fn new() -> Self {
        let mut available = BTreeSet::new();
        for i in 1..=1000 {
            available.insert(i);
        }
        SmallestInfiniteSet {
            available,
            unavailable: BTreeSet::new(),
        }
    }

    fn pop_smallest(&mut self) -> i32 {
        if let Some(smallest) = self.available.iter().next().cloned() {
            self.available.remove(&smallest);
            self.unavailable.insert(smallest);
            smallest
        } else {
            -1
        }
    }

    fn add_back(&mut self, num: i32) {
        if self.unavailable.contains(&num) {
            self.unavailable.remove(&num);
            self.available.insert(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * let obj = SmallestInfiniteSet::new();
 * let ret_1: i32 = obj.pop_smallest();
 * obj.add_back(num);
 */
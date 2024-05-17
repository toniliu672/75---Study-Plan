class SmallestInfiniteSet:
    def __init__(self):
        self.available = set(range(1, 1001))
        self.unavailable = set()

    def popSmallest(self) -> int:
        if self.available:
            smallest = min(self.available)
            self.available.remove(smallest)
            self.unavailable.add(smallest)
            return smallest
        else:
            return -1

    def addBack(self, num: int) -> None:
        if num in self.unavailable:
            self.unavailable.remove(num)
            self.available.add(num)

# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)
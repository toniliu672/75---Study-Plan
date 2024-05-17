class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        potions.sort()  
        pairs = []
        m = len(potions)

        for spell in spells:
            count = 0
            left = 0
            right = m - 1
            while left <= right:
                mid = (left + right) // 2
                product = spell * potions[mid]

                if product >= success:
                    right = mid - 1
                else:
                    left = mid + 1

            count = m - left
            pairs.append(count)

        return pairs
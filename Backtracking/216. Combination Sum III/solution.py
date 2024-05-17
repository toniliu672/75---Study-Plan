class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        result = []

        def backtrack(start: int, combination: List[int], sum_so_far: int):
            if len(combination) == k and sum_so_far == n:
                result.append(combination[:])
                return

            if len(combination) == k or sum_so_far > n:
                return

            for num in range(start, 10):
                combination.append(num)
                backtrack(num + 1, combination, sum_so_far + num)
                combination.pop()

        backtrack(1, [], 0)
        return result

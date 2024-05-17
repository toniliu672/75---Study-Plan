class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        
        n = len(nums1)
        pairs = sorted([(nums2[i], nums1[i]) for i in range(n)], reverse=True)

        max_score = 0
        sum_nums1 = 0
        heap = []  
        for pair in pairs:
            num2, num1 = pair
            if len(heap) < k:
                heapq.heappush(heap, num1)  
                sum_nums1 += num1
            elif num1 > heap[0]:
                sum_nums1 -= heap[0]
                heapq.heappop(heap)
                heapq.heappush(heap, num1)
                sum_nums1 += num1

            if len(heap) == k:
                max_score = max(max_score, sum_nums1 * num2)

        return max_score
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0

        points.sort(key=lambda x: x[1])
        arrows = 1
        curr = points[0]

        for balloon in points:
            if curr[1] < balloon[0]:
                curr = balloon
                arrows += 1

        return arrows

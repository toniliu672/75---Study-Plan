class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        m, n = len(maze), len(maze[0])
        queue = deque([(entrance[0], entrance[1], 0)])
        maze[entrance[0]][entrance[1]] = '+'  

        while queue:
            row, col, steps = queue.popleft()

            if row == 0 or row == m - 1 or col == 0 or col == n - 1:
                if steps > 0:  
                    return steps

            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                new_row, new_col = row + dr, col + dc
                if 0 <= new_row < m and 0 <= new_col < n and maze[new_row][new_col] == '.':
                    maze[new_row][new_col] = '+'  
                    queue.append((new_row, new_col, steps + 1))

        return -1  
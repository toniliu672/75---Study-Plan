class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = defaultdict(defaultdict)
        for (x, y), val in zip(equations, values):
            graph[x][y] = val
            graph[y][x] = 1.0 / val
        for k in graph:
            graph[k][k] = 1.0
            for i in graph[k]:
                for j in graph[k]:
                    graph[i][j] = graph[i][k] * graph[k][j]
        return [graph[x].get(y, -1.0) for x, y in queries]
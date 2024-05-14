class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = defaultdict(list)
        roads = set()
        for u, v in connections:
            graph[u].append(v)
            graph[v].append(u)
            roads.add((u, v))
        visited = [0] * n
        self.res = 0
        def dfs(node):
            visited[node] = 1
            for nex in graph[node]:
                if visited[nex] == 0:
                    if (node, nex) in roads:
                        self.res += 1
                    dfs(nex)
        dfs(0)
        return self.res
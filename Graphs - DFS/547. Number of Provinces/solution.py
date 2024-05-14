class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        def dfs(i: int):
            for j in range(len(isConnected)):
                if isConnected[i][j] == 1:
                    isConnected[i][j] = isConnected[j][i] = 0
                    dfs(j)

        provinces = 0
        for i in range(len(isConnected)):
            if isConnected[i][i] == 1:
                provinces += 1
                dfs(i)
        return provinces
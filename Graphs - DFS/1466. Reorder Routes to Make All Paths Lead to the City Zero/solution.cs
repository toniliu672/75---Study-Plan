public class Solution {
    public int MinReorder(int n, int[][] connections) {
        var graph = new Dictionary<int, List<int>>();
        var roads = new HashSet<string>();
        foreach (var connection in connections) {
            if (!graph.ContainsKey(connection[0])) graph[connection[0]] = new List<int>();
            if (!graph.ContainsKey(connection[1])) graph[connection[1]] = new List<int>();
            graph[connection[0]].Add(connection[1]);
            graph[connection[1]].Add(connection[0]);
            roads.Add(connection[0] + "," + connection[1]);
        }
        var visited = new bool[n];
        int res = 0;
        void Dfs(int node) {
            visited[node] = true;
            foreach (var nex in graph[node]) {
                if (!visited[nex]) {
                    if (roads.Contains(node + "," + nex)) res++;
                    Dfs(nex);
                }
            }
        }
        Dfs(0);
        return res;
    }
}
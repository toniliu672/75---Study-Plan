public class Solution {
    public double[] CalcEquation(IList<IList<string>> equations, double[] values, IList<IList<string>> queries) {
        var graph = new Dictionary<string, Dictionary<string, double>>();
        for (int i = 0; i < equations.Count; i++) {
            string a = equations[i][0], b = equations[i][1];
            if (!graph.ContainsKey(a)) graph[a] = new Dictionary<string, double>();
            if (!graph.ContainsKey(b)) graph[b] = new Dictionary<string, double>();
            graph[a][b] = values[i];
            graph[b][a] = 1 / values[i];
        }
        var res = new double[queries.Count];
        for (int i = 0; i < queries.Count; i++) {
            var visited = new HashSet<string>();
            string a = queries[i][0], b = queries[i][1];
            if (!graph.ContainsKey(a) || !graph.ContainsKey(b)) res[i] = -1.0;
            else res[i] = DFS(graph, visited, a, b);
        }
        return res;
    }

    private double DFS(Dictionary<string, Dictionary<string, double>> graph, HashSet<string> visited, string a, string b) {
        if (a == b) return 1.0;
        visited.Add(a);
        foreach (var nei in graph[a]) {
            if (!visited.Contains(nei.Key)) {
                double product = DFS(graph, visited, nei.Key, b);
                if (product > 0) return nei.Value * product;
            }
        }
        return -1.0;
    }
}
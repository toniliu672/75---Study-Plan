function minReorder(n: number, connections: number[][]): number {
    let graph = new Map();
    let roads = new Set();
    for (let [u, v] of connections) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
        roads.add(u + ',' + v);
    }
    let visited = new Array(n).fill(false);
    let res = 0;
    function dfs(node: number) {
        visited[node] = true;
        for (let nex of graph.get(node)) {
            if (!visited[nex]) {
                if (roads.has(node + ',' + nex)) res++;
                dfs(nex);
            }
        }
    }
    dfs(0);
    return res;
};
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let graph: { [key: string]: { [key: string]: number } } = {};
    for (let i = 0; i < equations.length; i++) {
        let [x, y] = equations[i];
        let val = values[i];
        if (!graph[x]) graph[x] = {};
        if (!graph[y]) graph[y] = {};
        graph[x][y] = val;
        graph[y][x] = 1.0 / val;
    }
    for (let k in graph) {
        for (let i in graph[k]) {
            for (let j in graph[k]) {
                graph[i][j] = graph[i][k] * graph[k][j];
            }
        }
    }
    return queries.map(([x, y]) => graph[x] && graph[x][y] ? graph[x][y] : -1.0);
};
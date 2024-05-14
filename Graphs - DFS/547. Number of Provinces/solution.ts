function findCircleNum(isConnected: number[][]): number {
    function dfs(i: number) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1) {
                isConnected[i][j] = isConnected[j][i] = 0;
                dfs(j);
            }
        }
    }

    let provinces = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[i][i] === 1) {
            provinces++;
            dfs(i);
        }
    }
    return provinces;
};
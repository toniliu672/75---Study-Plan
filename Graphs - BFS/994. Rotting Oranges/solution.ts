function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let freshOranges = 0;
    const rottenOranges: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            } else if (grid[i][j] === 2) {
                rottenOranges.push([i, j]);
            }
        }
    }

    let minutes = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (freshOranges > 0 && rottenOranges.length > 0) {
        minutes++;
        const size = rottenOranges.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = rottenOranges.shift()!;
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (0 <= nx && nx < m && 0 <= ny && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    freshOranges--;
                    rottenOranges.push([nx, ny]);
                }
            }
        }
    }

    return freshOranges === 0 ? minutes : -1;
}
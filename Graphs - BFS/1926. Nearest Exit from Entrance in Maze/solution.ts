function nearestExit(maze: string[][], entrance: number[]): number {
    const m = maze.length;
    const n = maze[0].length;
    const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift()!;

        if (row === 0 || row === m - 1 || col === 0 || col === n - 1) {
            if (steps > 0) {
                return steps;
            }
        }

        for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const new_row = row + dr;
            const new_col = col + dc;
            if (0 <= new_row && new_row < m && 0 <= new_col && new_col < n && maze[new_row][new_col] === '.') {
                maze[new_row][new_col] = '+';
                queue.push([new_row, new_col, steps + 1]);
            }
        }
    }

    return -1;
}
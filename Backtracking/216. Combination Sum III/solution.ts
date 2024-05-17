function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, combination: number[], sumSoFar: number): void {
        if (combination.length === k && sumSoFar === n) {
            result.push([...combination]);
            return;
        }

        if (combination.length === k || sumSoFar > n) {
            return;
        }

        for (let num = start; num < 10; num++) {
            combination.push(num);
            backtrack(num + 1, combination, sumSoFar + num);
            combination.pop();
        }
    }

    backtrack(1, [], 0);
    return result;
}

function dailyTemperatures(temperatures: number[]): number[] {
    let n = temperatures.length;
    let res = new Array(n).fill(0);
    let stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let cur = stack.pop()!;
            res[cur] = i - cur;
        }
        stack.push(i);
    }
    return res;
}

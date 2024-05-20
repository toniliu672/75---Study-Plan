function countBits(n) {
    let result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        result[i] = result[i & (i - 1)] + 1;
    }
    return result;
}

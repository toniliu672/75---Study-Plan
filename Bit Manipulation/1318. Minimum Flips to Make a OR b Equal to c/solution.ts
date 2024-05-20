function minFlips(a, b, c) {
    let flips = 0;
    for (let i = 0; i < 31; i++) {
        let bitA = a & 1, bitB = b & 1, bitC = c & 1;
        if (bitC === 0) {
            flips += bitA + bitB;
        } else {
            flips += bitA === bitB && bitB === 0 ? 1 : 0;
        }
        a >>= 1; b >>= 1; c >>= 1;
    }
    return flips;
}

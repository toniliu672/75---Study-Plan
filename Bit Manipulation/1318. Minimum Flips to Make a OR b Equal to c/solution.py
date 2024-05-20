class Solution:
    def minFlips(self, a, b, c):
        flips = 0
        for i in range(31):
            bitA, bitB, bitC = a & 1, b & 1, c & 1
            if bitC == 0:
                flips += bitA + bitB
            else:
                flips += 1 if bitA == bitB == 0 else 0
            a >>= 1; b >>= 1; c >>= 1
        return flips

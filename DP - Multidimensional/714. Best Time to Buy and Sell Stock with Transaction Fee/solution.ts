function maxProfit(prices, fee) {
    let n = prices.length;
    let cash = 0, hold = -prices[0];
    for (let i = 1; i < n; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};

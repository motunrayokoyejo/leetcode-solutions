function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;
    for ( let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];

        let profit = currentPrice - minPrice;
        maxProfit = Math.max(profit, maxProfit);

        minPrice = Math.min(currentPrice, minPrice);
    }
    return maxProfit;
};

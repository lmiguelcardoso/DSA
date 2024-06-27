var maxProfit = function (prices) {
    let minPrice = Infinity;
    let higherProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < minPrice) minPrice = price;

        const profit = price - minPrice;
        if (profit > higherProfit) higherProfit = profit;
    }
    return higherProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

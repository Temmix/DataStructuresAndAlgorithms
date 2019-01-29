/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share 
of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

function BuyAndSellStock(v){
    if(!v || v.length === 0) return 0;  

    let min = Math.min(...v);
    while(v.indexOf(min) === v.length - 1){ 
        v.splice(v.indexOf(min),1);
        min = Math.min(...v); 
        if(v.length === 0) return 0; 
}
    let laterTransactions = v.slice((v.indexOf(min) + 1)); 
    let max = Math.max(...laterTransactions);  
    return laterTransactions.length > 0 ? max - min : 0; 
}

console.log(BuyAndSellStock([7,1,5,3,6,4]));
console.log(BuyAndSellStock([7,6,4,3,1]));
console.log(BuyAndSellStock([7,2,6,4,8,1]));
console.log(BuyAndSellStock([7,6,2,8,1]));
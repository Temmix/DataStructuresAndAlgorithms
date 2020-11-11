/* 
  Big O Notation: O(2^n) : very bad runtime complexity
  for major improvement , look into Memoization of fibonacci .
  In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, 
  called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
  starting from 0 and 1
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
*/
function fib(n) {
  return n < 3 ? (n === 0 ? 0 : 1) : fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

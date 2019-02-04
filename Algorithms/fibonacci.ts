// Big O Notation: O(2^n) : very bad runtime complexity
// for major improvement , look into Memoization of fibonacci .
// [0,1,1,2,3,5,8,13,21,34,55,89]

function fib(n){
  return (n < 3) ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

// Big O Notation: O(2^n) : very bad runtime complexity
// for major improvement , look into Memoization of fibonacci .

function fib(n){
  return (n < 3) ? n : fib(n - 1) + fib(n - 2);
}

fib(10);

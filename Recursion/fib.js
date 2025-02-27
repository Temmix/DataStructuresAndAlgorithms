/*
fib
Write a recursive function called fib which accepts a number and 
returns the nth number in the Fibonacci sequence. Recall that the 
Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 
... which starts with 1 and 1, and where every number thereafter 
is equal to the sum of the previous two numbers.

*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(A){
  const K = { 1: 1,  2: 1, 3: 2,} 
  if (K[A]) return K[A]

  function helper(C) {
      K[C] = K[C - 1] + K[C - 2] 
      if (C=== A) return K[C]  
      return helper(C + 1)
  }
  
  helper(4)
  return K[A]
}

/*

SomeRecursive

Write a recursive function called someRecursive 
which accepts an array and a callback. 
The function returns true if a single value in 
the array returns true when passed to the callback. 
Otherwise it returns false.

*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(){
  const L = arguments[0]
  const fx = arguments[1]
  const R = []
  
  function helper(l) {
    if(l < 0) return;
    if(fx(L[l])) R.push(true)
    return helper(l - 1)
  }
  
  helper(L.length - 1) 
  return !!R.length 
}

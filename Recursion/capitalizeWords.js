/*

CapitalizeWords

Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing 
each word capitalized.

*/

function capitalizeWords () {
  const L = arguments[0] 
  const R = [] 

  function helper(i){
    if (L.length === i) return;
    
    R.push(L[i].toUpperCase())
    helper(i + 1)
  }
  
  helper(0)
  return R
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

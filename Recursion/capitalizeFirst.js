/*
CapitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first 
letter of each string in the array.

*/

function capitalizeFirst () {
  const D = arguments[0]
  if (!D.length) return []
  const R = []
  
  function helper(a) {
    if (!a.length) return;
    const n = a[0]
    const p = n[0].toUpperCase() + n.slice(1)
    R.push(p)
    return helper(a.splice(1))
  }

  helper(D)
  return R
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

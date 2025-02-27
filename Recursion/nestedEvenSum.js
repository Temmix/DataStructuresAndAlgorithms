/*

NestedEvenSum
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object 
which may contain nested objects.

*/

function nestedEvenSum () {
  const obj = arguments[0]
  let C = 0

  function helper(b) {
    const keys = Object.keys(b)
    if (keys.length === 0) return;
    
    for(const k in keys){
      const i = b[keys[k]]
      const v = Object.values(b[keys[k]]) 
      if(v.length === 0){
        if (Number.isInteger(i) && i % 2 === 0) 
          C += i
        } else {
           if(typeof i === 'object')
            helper(i)
        } 
    }    
  }
  
  helper(obj)
  return C
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

/*
Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n)
*/

function countZeroes(L){
  //using divide and conquer 
  let i = 0
  let C = 0
  let j = L.length - 1
  let m = Math.ceil(L.length /2)

  while(i < m) {
    if(i === j && L[i] === 0) C++
    else {
      if(L[j] === 0) C++
      if(L[i] === 0) C++
    }
    i++
    j--
  }
  
  return C
}

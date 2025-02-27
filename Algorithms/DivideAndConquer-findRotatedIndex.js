/*
Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated 
array of sorted numbers and an integer. The function should return 
the index of the integer in the array. If the value is not found, return -1.

Constraints:

Time Complexity - O(log n)
Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

function findRotatedIndex(L,A,C=0){
  let i = 0
  let j = L.length - 1
  let M = Math.ceil(L.length /2)
  
  while(i < M) {
      if(i === j && L[i] === A) return i
      else {
          if(L[i] === A) return i
          if(L[j] === A) return j
      }
      i++
      j--
  }
 
  return -1
}

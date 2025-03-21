/*
Divide and Conquer - sortedFrequency
Given a sorted array and a number, write a function called 
sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1
Time Complexity - O(log n)
*/

function sortedFrequency(L,A, C = 0){
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = L.length - 1;
  let M = Math.ceil(L.length / 2)
  
  while(i < M){
      if(i === j && L[i] === A ) C++
      else {
          if(L[j] === A) C++
          if(L[i] === A) C++
      }
      i++
      j--
  }
  
  return C || -1
}

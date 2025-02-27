/*
RecursiveRange

Write a function called recursiveRange which accepts a 
number and adds up all the numbers from 0 to the number passed to the function

*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(A){
   if(A === 0) return 0 
   return A + recursiveRange(A - 1)
}

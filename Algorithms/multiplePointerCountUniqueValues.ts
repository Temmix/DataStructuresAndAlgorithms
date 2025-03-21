/*

Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus
You must do this with constant or O(1) space and O(n) time.

*/


function countUniqueValues(A){
    let L = A.length
    let R = []
    if (!L) return 0;
    let i = 0;
    let j = 1;
    R.push(A[i])
     
    while (true) {
        if (j >= L) break;
        if(A[i] === A[j]){
           j = j + 1
        } else {
           R.push(A[j]) 
           i = j 
           j = j + 1
        }
    }
    return R.length;
}

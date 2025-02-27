/*
Binary Search Exercise
Write a function called binarySearch which accepts a 
sorted array and a value and returns the index at which 
the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - 
you can read how to implement it here 
- https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here 
- https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 10) // 2
binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95) // 16
binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 100) // -1

binarySearch([1,2,3,4,5],2) 
Explanation: get indices of start, end, and middle
start = 0, end = List.Length -1, middle = Math.floor((start + end)/2)

If you want to get the index of 2, in the above
if middle is greater than A, move end index to middle + 1
if middle is less than A, move start to middle - 1
then middle is reevaluated Math.floor((start + end)/2)
*/

function binarySearch(L, A){
  let start = 0
  let end = L.length - 1 
  let middle = Math.floor((start + end)/2)
  
  while(start <= end) {
      if(L[middle] === A) return middle
    
      if(L[middle] > A) {
        end = middle - 1 
      }
      else {
        start = middle + 1 
      }
      middle = Math.floor((start + end) /2)
  }
  return -1
}


// its always divide and conquer..
var a = [1,2,4,6,1,100,0,1000,3]; 
a.sort( (a, b) => a - b );

console.log('Initialize the binary Search now');

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2); 
    console.log(arr);
    if (arr[mid] === i) { // found
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) { // mid is lower
        return binarySearch(arr.splice(mid, arr.length - 1), i);
    } else if (arr[mid] > i && arr.length > 1) { // mid is higher
        return binarySearch(arr.splice(0, mid), i);
    } else {  // could not be found
        return -1;
    }
    
}
var result = binarySearch(a, 100);

console.log(result);

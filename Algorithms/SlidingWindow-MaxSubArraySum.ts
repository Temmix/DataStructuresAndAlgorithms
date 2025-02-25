/*
SLIDING WINDOW PATTERN

Write a function called maxSubarraysum which accepts an array of integers 
and a number called n. The function should calculate the maximum sum of n 
consecutive elements in the array
*/


function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // Get the sum of first n num
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

 // EXPLANATION
 // start sliding the previous and adding the next index. E.G
 // add 2,6,9. Then the second loop starts from index 3, remove the index 0, then add index 3, 
 // that is the sliding window pattern instead of using loops
 
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

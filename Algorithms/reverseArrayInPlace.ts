/*
  This process is used to swap the last to the first, once its get to the middle of the length of the array,
  all the process is already done cos two operations was done with one process.
  Without using reverse method of Array.
*/

const reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));
console.log([1, 2, 3, 4, 5, 6, 7, 8].reverse());

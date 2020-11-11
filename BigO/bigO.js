// Big O Notation: 0(1) : Constant Runtime
// No matter how big the array is, the runtime is constant.

const log = array => {
  console.log(array[0]);
  console.log(array[1]);
};

/*=======================================================================*/

// Big O Notation: O(n) : Linear Runtime
// The bigger the array, the longer is the runtime linearly.

const logAll = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

/*=======================================================================*/

// Big O Notation: O(n^2) : Exponential Runtime;
// The bigger the array, the more longer is the runtime exponentially.

const addAndLog = array => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      result.push(array[i] + array[x]);
    }
  }
  return result;
};

console.log(addAndLog(["A", "B", "C"])); // 9 pairs logged out
console.log(addAndLog(["A", "B", "C", "D"])); // 16 pairs logged out
console.log(addAndLog(["A", "B", "C", "D", "E"])); // 25 pairs logged out

/*=======================================================================*/

// Big O Notation: O(log n) : Logarithmic Runtime;
// This uses the divide and conquer technique.

const binarySearch = (array, key) => {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) low = mid + 1;
    else if (element > key) high = mid - 1;
    else return mid;
  }
  return -1;
};

/*=======================================================================*/

/* 
  Big O Notation: O(2^n) : very bad runtime complexity
  for major improvement , look into Memoization of fibonacci .
  In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, 
  called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
  starting from 0 and 1
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
*/
function fib(n) {
  return n < 3 ? (n === 0 ? 0 : 1) : fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

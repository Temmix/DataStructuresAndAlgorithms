/*

Bubble Sort
ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, 
bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    // provide a default
  }
}
The comparator function is a callback that will take two values from the array to be compared. 
The function returns a negative value if the first value is less than the second, a positive value 
if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that 
we are sorting the values from smallest to largest.

Bubble sort is an O(n^2) algorithm. You can read more about it here: 
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

Examples
bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

BUBBLE SORT EXPLANATION
let us have this [4, 20, 12, 10, 7, 9]
we have to use two loops, i , j 
we use the inner loop with j for the comparison of the index j and index j + 1
Once this is completed, that means the last index is the highest, 
no point looping to it again

*/

function bubbleSort(arr, fx = (a, b) => a - b){
  for(let i = arr.length - 1; i > 0; i--){
    for(let j = 0; j < i; j++){
      const R = fx(arr[j] , arr[j + 1])
       // if R > 0 first is greater second, 
       // so swap, otherwise leave it the way it is :)
      if(R > 0)  
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  return arr; 
}



// Big notation is O(n^2)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);

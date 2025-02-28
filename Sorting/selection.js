/*

SELECTION SORT

Here's some guidance for how selection sort should work:
Assign the first element to be the smallest value (this is called the minimum). 
It does not matter right now if this actually the smallest value in the array.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" 
and continue until the end of the array.

If the "minimum" is not the value (index) you initially began with, swap the two values. 
You will now see that the beginning of the array is in the correct order (similar to how 
after the first iteration of bubble sort, we know the rightmost element is in its correct place).
Repeat this with the next element until the array is sorted.
This algorithm has a O(n^2) time complexity. You can read more about them here: 
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

Examples

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

*/


function selectionSort(ARR, COMP){
  
  for(let i = 0; i < ARR.length; i++) {
      let smallestIndex = i;
      
      for(let j = i + 1; j < ARR.length; j++) {
        // if comparator is given, i.e COMP fx
           if(typeof COMP === 'function'){
              if( COMP(ARR[j], ARR[smallestIndex]) < 0)
                smallestIndex = j
           }
           else {
               if(ARR[j] < ARR[smallestIndex])
                smallestIndex = j
           }
      
      }
      if(smallestIndex !== i) {
         let temp = ARR[i]
         ARR[i] = ARR[smallestIndex]
         ARR[smallestIndex] = temp
      }
  }
  return ARR
}





const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){ 
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);

/*  ANOTHER METHOD    */

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

/*
      Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly 
      steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. 
      The pass through the list is repeated until the list is sorted. 
*/

function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

function bubbleSort2(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1])); // 66 iterations
console.log(bubbleSort2([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1])); // 77 iterations

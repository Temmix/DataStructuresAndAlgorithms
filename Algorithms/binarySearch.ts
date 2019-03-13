/* Big O Notation : O(log n) 
     Binary search compares the target value to the middle element of the array. 
     If they are not equal, the half in which the target cannot lie is eliminated 
     and the search continues on the remaining half, again taking the middle element 
     to compare to the target value, and repeating this until the target value is found. 
     If the search ends with the remaining half being empty, the target is not in the array. 
     Even though the idea is simple, implementing binary search correctly requires attention 
     to some subtleties about its exit conditions and midpoint calculation, particularly if 
     the values in the array are not all of the whole numbers in the range.
*/

function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1)
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  else if (middleElem > key && numArray.length > 1)
    return binarySearch(numArray.splice(0, middleIdx), key);
  return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));

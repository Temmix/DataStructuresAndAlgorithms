// Result should be arrays in an array

// O(n) Runtime .
const twoSum = (arr, num) => {
  const map = [];
  const list = [];
  arr.forEach(x => {
    if (map.indexOf(num - x) !== -1) list.push([x, num - x]);
    map.push(x);
  });
  return list;
};

console.log(twoSum([1, 6, 6, 4, 5, 3, 3], 7)); // [[6,1], [3,4], [3,4]]

/*===============================================================================================*/

// O(n^2) Runtime.
const twoSum2 = (arr, num) => {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) list.push([arr[j], arr[i]]);
    }
  }
  return list;
};

console.log(twoSum2([1, 6, 6, 4, 5, 3, 3], 7)); // [[6,1], [3,4], [3,4]]

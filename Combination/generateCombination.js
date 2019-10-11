/*
This function will generate different unique combination
*/
function generateCombination(list) {
  return list.reduce(function permute(res, item, key, arr) {
    return res.concat(
      (arr.length > 1 &&
        arr
          .slice(0, key)
          .concat(arr.slice(key + 1))
          .reduce(permute, [])
          .map(function(perm) {
            return [item].concat(perm);
          })) ||
        item
    );
  }, []);
}

console.log(generateCombination([1, 2, 3, 4]));
console.log(generateCombination([1, 2, 3, 4, 5, 6]));

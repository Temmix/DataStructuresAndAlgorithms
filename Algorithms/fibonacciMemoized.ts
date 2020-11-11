/* 
  Big Notation: O(n)
  In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, 
  called the Fibonacci sequence, such that each number is the sum of the two preceding ones, 
  starting from 0 and 1
*/

// using Array as cache
function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return index === 0 ? 0 : 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

// using object as cache
function fibMemo2(index, cache) {
  cache = cache || {};
  if (index in cache) return cache[index];
  if (index < 3) return index === 0 ? 0 : 1;
  else {
    cache[index] = fibMemo2(index - 1, cache) + fibMemo2(index - 2, cache);
    return cache[index];
  }
}

console.log(fibMemo(50, []));
console.log(fibMemo2(50, {}));

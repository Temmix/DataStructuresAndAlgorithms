// Big Notation: O(n)

// using Array as cache
function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}
 
fibMemo(500);

// using object as cache
function fibMemo2(index, cache) { 
  cache = cache || {};
  if(index in cache) return cache[index];
  if(index < 3) return 1;
  else {
    cache[index] = fibMemo2(index - 1, cache) + fibMemo2(index - 2, cache);
    return cache[index];
  }
}

fibMemo2(500);

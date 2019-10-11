function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

const getMean = array => array.reduce((x, y) => x + y) / array.length;

const getMedian = arr => {
  arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? arr[Math.floor(arr.length / 2)]
    : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};

const getMode = array => {
  var modeObj = {};
  array.forEach(num => (modeObj[num] = (modeObj[num] || 0) + 1));

  const modes = Object.keys(modeObj).filter(
    x => modeObj[x] === Math.max(...Object.keys(modeObj).map(x => modeObj[x]))
  );

  // Note : if every value appears same amount of times
  return modes.length === Object.keys(modeObj).length ? [] : modes;
};

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));
console.log(meanMedianMode([1, 2, 3, 4, 5, 6, 4, 9, 2, 7]));

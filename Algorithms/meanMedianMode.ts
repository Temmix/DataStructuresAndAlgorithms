function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
const getMean = array =>  array.reduce((x,y) => x + y)/ array.length; 
 
 
const getMedian = arr => {
   arr.sort((a, b) => a-b);
   return (arr.length % 2 !== 0) 
    ?  arr[Math.floor(arr.length / 2)]
    :  ((arr[(arr.length / 2) - 1] + arr[arr.length / 2] ) / 2); 
}
 
const getMode = array => {
  var modeObj = {};
  
// create modeObj
  array.forEach(num => modeObj[num] = (modeObj[num] || 0) + 1 );
   
// create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  
 // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
 
console.log(meanMedianMode([9,10,23,10,23,9]));
console.log(meanMedianMode([1,2,3,4,5,6,4,9,2,7]));

// its always divide and conquer..
var a = [1,2,4,6,1,100,0,1000,3]; 
a.sort( (a, b) => a - b );

console.log('Initialize the binary Search now');

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2); 
    console.log(arr);
    if (arr[mid] === i) { // found
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) { // mid is lower
        return binarySearch(arr.splice(mid, arr.length - 1), i);
    } else if (arr[mid] > i && arr.length > 1) { // mid is higher
        return binarySearch(arr.splice(0, mid), i);
    } else {  // could not be found
        return -1;
    }
    
}
var result = binarySearch(a, 100);

console.log(result);
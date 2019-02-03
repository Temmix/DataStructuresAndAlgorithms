/*
Using recursion 
the mergesort make sure it turns all the element in the array to the array
like the following:
[9,5,2,8,5,7,9,1,4,6,0,4,6] then merge function will start sorting the arrays 

[[9],[5],[2],[8],[5],[7],[9],[1],[4],[6],[0],[4],[6]
[[5,9], [2,8], [5,7], [1,9], [4,6], [0,4], [6]]
[[2,5,8,9], [1,5,7,9], [0,4,4,6], [6]]
[[1,2,5,5,7,8,9,9],[0,4,4,6,6]]
[0,1,2,4,4,5,5,6,6,7,8,9,9]
 
*/


function mergeSort(arr){
    if(arr.length < 2) return arr;

    let middleIdx = Math.floor(arr.length/2);
    let firstMiddle = arr.slice(0, middleIdx);
    let secondMiddle = arr.slice(middleIdx); 
    return merge(mergeSort(firstMiddle), mergeSort(secondMiddle));
}

function merge(arr1, arr2){
    let list = [];
    while(arr1.length && arr2.length){
        let temp;
        if(arr1[0] < arr2[0]) temp = arr1.shift();
        else temp = arr2.shift();
        list.push(temp);
    }
    if(arr1.length) list = list.concat(arr1);
    else if(arr2.length) list = list.concat(arr2);
    return list;
}

console.log(mergeSort([9,5,2,8,5,7,9,1,4,6,0,4,6,11,10]))
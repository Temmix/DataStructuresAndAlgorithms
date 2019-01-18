// Return the number at the index given.
// Big notation is O(n)
function fibonacciByRecursion(n){
    if(n < 2) return n;
    return fibonacciByRecursion(n - 1) + fibonacciByRecursion(n - 2);
}

// Big notation is O(2^n) very bad
function fibonacciByIteration(value){
     const list = [0,1,1];
     if(value <= list.length - 1) return list[value];

     for(let i = 3; i <= value; i++){
        list.push(list[i-2] + list[i-1]);
     } 
     return list[value];
}

console.log(fibonacciByIteration(80));
console.log(fibonacciByRecursion(8));
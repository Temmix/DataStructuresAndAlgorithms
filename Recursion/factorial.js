function factorialByRecursion(value) { 
    return value === 2 ? value : value * factorialByRecursion(value - 1);
}

function factorialByIteration(value){
    let product = 1;
    for(let i = 2; i <= value; i++){
        product *= i;
    }
    return product;
}
 
console.log(factorialByRecursion(5));
console.log(factorialByIteration(5));
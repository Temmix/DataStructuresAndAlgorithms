/*
ProductOfArray

Write a function called productOfArray which takes 
in an array of numbers and returns the product of them all.

*/

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(L){
    let R = 1;
    
    function helper(L){
        if(L.length === 0) 
            return;
        R *= L[0] 
        helper(L.splice(1))
    }
    helper(L)
    
    return R;
}

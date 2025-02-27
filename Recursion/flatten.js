/*
Flatten

Write a recursive function called flatten which 
accepts an array of arrays and returns a 
new array with all values flattened.

*/

function flatten(){
    const A = arguments[0]
    const L = []

    function helper(l) {
        if(!l || l.length === 0) return;
        if(!(Array.isArray(l[0]))) L.push(l[0])
        else {
        // note, if here, then a is an Array i.e l[0]
            const [a,...b] = l
            return helper([...a,...b]) 
        }
        return helper(l.splice(1))
    }
    
    helper(A)
    return L
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

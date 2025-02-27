/*

StringifyNumbers

Write a function called stringifyNumbers which takes 
in an object and finds all of the values which are 
numbers and converts them to strings. 
Recursion would be a great way to solve this!

The exercise intends for you to create a new object 
with the numbers converted to strings, and not modify 
the original. Keep the original object unchanged.

*/


function stringifyNumbers(){
    const D = arguments[0]
    const R = {}

    function helper(obj,R){
        if(!obj) return;

        const keys = Object.keys(obj) 
        for(let k in keys) { 
            
            if(typeof obj[keys[k]] === 'number'){ 
                R[keys[k]] = obj[keys[k]].toString()
            }else {  
                R[keys[k]] = obj[keys[k]]
                helper(obj[keys[k]], R[keys[k]])
            }
        }
    }
    helper(D, R)
    return R
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

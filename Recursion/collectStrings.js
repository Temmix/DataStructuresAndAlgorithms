/*
CollectStrings

Write a function called collectStrings which accepts 
an object and returns an array of all the values 
in the object that have a typeof string

*/

function collectStrings(){
    const D = arguments[0]
    const R = []

    function helper(obj){
        if(!obj) return;

        const keys = Object.keys(obj) 
        for(let k in keys){
            if(typeof obj[keys[k]] === 'string'){ 
                R.push(obj[keys[k]])
            }
            else {
                helper(obj[keys[k]])
            }
        }
    }
    helper(D)
    return R
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

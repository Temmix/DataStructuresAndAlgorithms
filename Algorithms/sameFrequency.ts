/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/


function sameFrequency(A, B){
    let lA = A.toString().split('')
    let lB = B.toString().split('')
    if (lA.length !== lB.length || !lA.length || !lB.length) 
        return false;
    
    let dA = {}
    for (let i of lA) {
        dA[i] = !dA[i] ? 1 : dA[i] + 1
    }
   
    for (let i of lB) {
        if(!dA[i]) 
            return false 
        else 
            dA[i] = dA[i] - 1
    }
    return true;
}

sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

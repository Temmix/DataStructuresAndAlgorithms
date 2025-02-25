/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(A,B){
   //  check the length of the inputs
    if(A.length !== B.length) {
        return false;
    }

    // use dictionary for B elements 
    var dictB = {};

    // loop B to fill the dictB
    for (let b of B) {
        dictB[b] = (dictB[b] || 0) + 1;
    }
    
    // do operation by looping A and check in dictB and remove it from dictB
    for (let k of A.split('')) {
        if(!dictB[k]) {
            return false
        }
        dictB[k] = dictB[k] - 1
    }
    return true;
}

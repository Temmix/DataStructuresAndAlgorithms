//Implement a function that reverses a string using iteration...and then recursion!
/*
Reverse
Write a recursive function called reverse 
which accepts a string and returns a new string in reverse.
*/

function reverse(){
    const A = arguments[0] // for non arrow function.

    function helper(l){
        if (l < 0) return '';
        return A[l] + helper(l - 1)
    }
    
   return helper(A.length - 1)  
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverseString(str) {
    if(str.length === 1) return str; 
    let n = str.split(''); 
    n.splice(str.length - 1); 
    return str[str.length - 1] + reverseString(n.join('')); 
}

console.log(reverseString('yoyo master'));
//should return: 'retsam oyoy'

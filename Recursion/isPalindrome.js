/*

IsPalindrome
Write a recursive function called isPalindrome which 
returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.

*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(){
   const A = arguments[0]
   
   function helper(l) {
     if (l === 0) return A[l]
      return A[l] + helper(l - 1)
    }
    
   return A === helper(A.length - 1)
}

function isPalindromeGreedy() {
    const A = arguments[0]  // non - arrow function 
    const L = A.length 
    const M = Math.floor(L/2) 
    
    // Checking first and Last character at the same time
    for( let i = 0; i <= M; i++){  
        if ( A[i] !== A[L - i - 1]) { 
            return false
        }
    }
    return true 
}

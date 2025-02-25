/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a subsequence 
of the characters in the second string. In other words, the function should 
check whether the characters in the first string appear somewhere in the second 
string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - O(1)
*/


function isSubsequence(A, B) {
   if (A.length > B.length) return false;

    let a = 0;
    let b = 0;

    while(true) {
        if(a > A.length) break;
        if(b > B.length) return false;
        
        if(A[a] === B[b]) {
            a = a + 1;
            b = a;
        } else {
            b = b + 1;
        }
    }
    return true;
}

isSubsequence('abc', 'abracadabra')

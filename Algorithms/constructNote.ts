/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. 
The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)
Space Complexity: O(N)

Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/


function constructNote(N,M){
  const dM = {}
  const dN = {}
  
  if(N.length > M.length) return false
  
  for ( let i in M) {
     dM[M[i]] = !dM[M[i]] ? 1 : dM[M[i]] + 1
  }  

  for ( let i in N) {
     dN[N[i]] = !dN[N[i]] ? 1 : dN[N[i]] + 1
  } 

  for(let i = 0; i < N.length; i++){
     if( dM[N[i]] < dN[N[i]]) return false
  }
  return true
}

 // constructNote('aa', 'abc') // false
//constructNote('abc', 'dcba') // true
//constructNote('aabbcc', 'bcabcaddff') // true
constructNote('skbjjjvnnd', 'fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd')

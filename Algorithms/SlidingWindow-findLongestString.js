/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a 
string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(a, C = 0, M = 0){
    let D = {}
    let i = 0
    let j = 0 

    function helper(){
        if(i >= a.length || j >= a.length) return;
        
        if(!D[a[j]]) {
            C++
            D[a[j]] = 1
            j++
        } else {
            D = {}
            i += 1
            j = i 
            M = Math.max(C, M)
            C = 0
        }
        return helper()  
    }
    
    helper()
    M = Math.max(C, M)
    return M
}

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    if(str.length === 1) return str; 
    let n = str.split(''); 
    n.splice(str.length - 1); 
    return str[str.length - 1] + reverseString(n.join('')); 
}

console.log(reverseString('yoyo master'));
//should return: 'retsam oyoy'
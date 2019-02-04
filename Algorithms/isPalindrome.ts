function isPalindrome(string) { 
  var charactersArr = string.toLowerCase().split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  }); 
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}
 
console.log(isPalindrome("Madam, I'm Adam"));

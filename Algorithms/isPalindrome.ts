/*
  A palindrome is a word, number, phrase, or other sequence of characters which 
  reads the same backward as forward, such as madam or racecar or the number 10801.
*/

function isPalindrome(string) {
  var charactersArr = string.toLowerCase().split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join("") === lettersArr.reverse().join("");
}

console.log(isPalindrome("Madam, I'm Adam"));

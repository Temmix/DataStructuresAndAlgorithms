/*
  In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, 
  Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. 
  It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter 
  some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be 
  replaced by A, E would become B, and so on.
*/

function caesarCipher(str, num) {
  num = num % 26; // This ensures num is not greater than 26 which the count of all letters a - z
  let lowerCaseString = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    // Check if the original letter is uppercase
    newString +=
      str[i] === str[i].toUpperCase()
        ? alphabet[newIndex].toUpperCase()
        : alphabet[newIndex];
  }
  return newString;
}

console.log(caesarCipher("Zoo    Keeper", 2));

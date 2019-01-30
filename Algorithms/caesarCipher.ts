function caesarCipher(str,num) {
  num = num % 26; // this is really powerful
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    
 // check if the original letter is uppercase 
    if (str[i] === str[i].toUpperCase()) {
      newString += (str[i] === str[i].toUpperCase())
              ? alphabet[newIndex].toUpperCase()
              : alphabet[newIndex];
  };
  
  return newString;
}
caesarCipher('Zoo Keeper', 2);

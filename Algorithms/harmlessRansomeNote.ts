/*
    Given an arbitrary ransom note string and another string containing letters from all the magazines, 
    write a function that will return true if the ransom note can be constructed from the magazines ; 
    otherwise, it will return false.
    Each letter in the magazine string can only be used once in your ransom note.

    Note:
    You may assume that both strings contain only lowercase letters.
    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true
*/

// This is buggy kind of
function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  magazineArr.forEach(word => {
    magazineObj[word] = (magazineObj[word] || 0) + 1;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

const harmlessRansomNote2 = (note, magazine) => {
  const magMap = {};
  [].forEach.call(magazine, e => {
    magMap[e] = (magMap[e] || 0) + 1;
  });

  let result = true;
  [].forEach.call(note, j => {
    if (j in magMap && magMap[j] !== 0) magMap[j] = magMap[j] - 1;
    else result = false;
  });
  return result;
};

console.log(
  harmlessRansomNote(
    "this is a secret note for you from a secret admirer",
    `puerto rico is a place of great wonder and excitement it has many secret 
waterfall locatoins that i am an admirer of you must hike quite a distance 
to find the secret places as they are far from populated areas but it is 
worth the effort a tip i have for you is to go early in the morning when 
it is not so hot out also note that you must wear hiking boots this is one 
of the best places i have ever visited`
  )
);

console.log(
  harmlessRansomNote2(
    "this is a secret note for you from a secret admirer",
    `puerto rico is a place of great wonder and excitement it has many secret 
waterfall locatoins that i am an admirer of you must hike quite a distance 
to find the secret places as they are far from populated areas but it is 
worth the effort a tip i have for you is to go early in the morning when 
it is not so hot out also note that you must wear hiking boots this is one 
of the best places i have ever visited`
  )
);

console.log(harmlessRansomNote("a aa", "aaa aa")); // should be true but false buggy funx
console.log(harmlessRansomNote2("a aa", "aaa aa")); // return true

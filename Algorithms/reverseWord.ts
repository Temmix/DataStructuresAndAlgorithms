// Note you can not use the Array.reverse method
const reverseWords = word => {
  const list = word.split(" ");
  const response = [];
  list.forEach(x => {
    let word = "";
    for (let i = x.length - 1; i >= 0; i--) {
      word += x[i];
    }
    response.push(word);
  });
  return response.join(" ");
};

console.log(reverseWords("This is a string of words")); // "sihT si a gnirts fo sdrow"

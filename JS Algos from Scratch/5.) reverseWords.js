// Every word should be reversed BUT the string as a whole should not be reversed
// Do not use array.reverse()  method
function reverseWords(str) {
  // reverse every word in the string
  const wordsArr = str.split(" ");
  let reversedWordArr = [];

  wordsArr.forEach(word => {
    let reversed = "";

    for (let character of word) {
      reversed = character + reversed;
    }

    reversedWordArr.push(reversed);
  });

  let reversedStr = reversedWordArr.join(" ");
  console.log(reversedStr);
}

reverseWords("Hello there");
reverseWords("Bye mate");

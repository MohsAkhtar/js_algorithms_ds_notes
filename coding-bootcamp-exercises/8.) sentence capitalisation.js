// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Make an empty array 'words'
// Split the input string by spaces to get an array
// For each word in the array
// -- Uppercase the first letter of the word
// -- Join first letter with rest of string
// -- Push result into 'words' array
// Join 'words' into a string and return it
function capitalize1(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// ---ALT SOLUTION---#
// Create 'result' string which is first char of input string capitalised
// For each character in the string
// -- IF the char to the left a space
// -- -- Capitalize it and add it to 'result'
// -- ELSE
// -- -- Add it to 'result'
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

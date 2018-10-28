// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// OTHER SIMILAR QUESTIONS WITH STRINGS
//  What is the most common char in a string?
//  Does string A have same chars as string B (anagram)?
//  Does the given string have any repeated chars in it?
//
// For every problem related to counting or verifying the
// number of chars in string:
//
// Take our string and convert it to object, where key are
// the chars from string and values are number of times that
// char has appeared
//
// Iterate through string
// Every time new char is found add to object
// Or add 1 to a char if found before

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function maxChar2(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // if falsy return 1
  }

  return charMap;
}

module.exports = maxChar;

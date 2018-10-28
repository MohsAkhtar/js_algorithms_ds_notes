// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ITERATIVE SOLUTION
// Using array/string method 'includes' and vowel string 'aeiou'
// Array version is better as you can add words too like 'ath'
function vowels1(str) {
  let count = 0;
  const stringVersionCheck = "aeiou";
  const arrayVersionCheck = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (arrayVersionCheck.includes(char)) {
      count++;
    }
  }

  return count;
}

// CONDENSED VERSION - Using Regex
// Using match method - one thing to note is match returns an array, if no matches found it will return null
//
// Regex options - g means we dont stop at first match, i means case insensitive
//
// Ternaries - ? Truthy : Falsy
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

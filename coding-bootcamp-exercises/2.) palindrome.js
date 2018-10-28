// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
  let reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

function palindrome2(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return str === reversed;
}

// Using the every array helper we'll turn our str into an arry and use this
// helper on it
// every helper - used to do boolean check of every element in an array
//
// e.g is 'every' value greater than 5?
// array.every((val => val > 5))
// returns true if every element is true and false if one or more is not
//
// Here we will compare beginning and end chars and then move pointers inward
// This however does twice as much work as needed with comparisons and so can be
// used as an initial solution and can be said to be improved upon.
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

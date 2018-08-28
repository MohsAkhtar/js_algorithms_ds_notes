/*Given a string, return true if the
string is a palindrome or false if it
is no. Do include spaces and punctuation
in determining if the string is a palindrome.

---EXAMPLES---
palindrome('abba') === true
palindrome('abcd') === false

*/

// ---SOLUTION 1---
// 1.) Turn 'str' into an array
// 2.) Call reverse method on the array
// 3.) Join the array back into a string
// 4.) Compare these 'reversed' str to
//      original str

function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str === reversed;
}

// ---SOLUTION 2---
// Turn string into an array
// Use every() on that array
// Return result

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

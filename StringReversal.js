/* Given a string, return a new string with the reversed
order of characters

--EXAMPLES--
reverse('apple') === 'elppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'

*/

// ---SOLUTION 1---
// Turn 'str' into an array
// Call reverse method on array
// Join the array back into a string
// Return the result

function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

function reverse(str) {
  return (arr = str
    .split("")
    .reverse()
    .join(""));
}

// ---SOLUTION 2---
// 1.) Create an empty string called 'reversed'
// 2.) For each character in the provided string
//      take the character and add it to the start
//      of 'reversed'
// 3.) Return the string 'reversed'

function reverse2(str) {
  let reversed = "";

  for (let character of str) {
    reversed = reversed + character;
  }

  return reversed;
}

//---SOLUTION 3---
// Turn given string into a array by using split('')
// Then use reduce helper

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

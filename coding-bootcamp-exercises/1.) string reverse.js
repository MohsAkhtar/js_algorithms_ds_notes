// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Turn 'str' into an array
// Call 'reverse' method on array
// Join the array back into a string
// Return the result
function reverse1(str) {
  let reverse = str
    .split('')
    .reverse()
    .join('');
  return reverse;
}

// ----Alt solution with more manual work----

// Create an empty string called 'reversed'
// For each char in the provided string
// Take the char and add it to start of 'reversed'
// Return the variable 'reversed'
function reverse2(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// Method that uses reduce helper
// reduce - take all different values with in an array and condense them down
// to one single value
// reduce takes two seperate args. First is going to be an arrow function and
// second will be starting initial value for our function. In this case an empty
// string
function reverse(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

module.exports = reverse;

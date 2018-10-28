// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ITERATIVE SOLUTION
// From 0 to n (Iterate through rows)
// -- Create an empty str, 'stair'
// -- From 0 to n (Iterate through columns)
// -- -- IF the current column <= current row
// -- -- -- Add a '#' to 'stair'
// -- -- ELSE
// -- -- -- Add a space to 'stair'
// Console log 'stair'
function steps1(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

// RECURSIVE SOLUTION
//
// -- RECURSION TIPS
// Figure out the bare minimum pieces of info to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do some work. Call your function again, making sure the arguments have
// changed in some fashion.
//
// If (row === n) then hit end of problem
// If the 'stair' string has length === n then we are at end of row
// If length of stair string is less than or equal to the row number we are
// working on, we a '#' otherwise add a space ' '.
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // relying on stair default val as we need empty stair each time
  }

  // const add = stair.length <= row ? stair += '#' : stair += ' ';
  // steps(n, row, stair + add);
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;

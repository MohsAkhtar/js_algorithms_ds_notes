// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// LEETCODE HARD
// Create empty array of arrays called 'results'
// Create a counter variable, starting at 1
// As long as (start col <= end col) AND (start row <= end row)
// -- Loop from start col to end col
// -- -- At results[start_row][i] assign counter variable
// -- -- Increment counter
// -- Increment start row
// -- Loop from start row to end row
// -- -- At results[i][end_column] assign counter variable
// -- -- Increment counter
// Decrement end row
// ... repeat for other two sides
//
// Note: You can freely assign values into an array that have not been initialised
// let arr = [];
// arr[3] = 'hello'; // notice we do not have to push a value in
function matrix(n) {
  const results = [];

  // create number of empty subarrays
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right col
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start col
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return results;
}

module.exports = matrix;

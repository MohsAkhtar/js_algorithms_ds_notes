/*Given an integer, return an integer
that is the reverse ordering of numbers

---EXAMPLES---
reverseInt(51) === 15
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-15) === -51
reverseInt(-90) === -9

*/

//---SOLUTION---
//1.) Turn number into string
//2.) Split string into array
//3.) Reverse method on it
//4.) Join it back together
//5.) Turn back to int

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

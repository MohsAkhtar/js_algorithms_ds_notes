function squareDigitsSequence(a0: number): number {
  let map = {};
  let count = 1;
  let digits = splitDigits(a0);

  while (true) {
    let sumOfDigits = sumSquares(digits);
    if (!map.hasOwnProperty(sumOfDigits)) {
      map[sumOfDigits] = 1;
      digits = splitDigits(sumOfDigits);
      count++;
    } else {
      return count;
    }
  }

  return count;
}

function splitDigits(num) {
  return num.toString().split('');
}

function sumSquares(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Math.pow(num, 2);
  }
  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));

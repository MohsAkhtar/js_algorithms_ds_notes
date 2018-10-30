function largestNumber(n: number): number {
  let numberStr = '';

  for (let i = 0; i <= n; i++) {
    numberStr = numberStr.concat('9');
  }

  return parseInt(numberStr);
}

function largestNumber2(n: number): number {
  let newNumAsString = '9'.repeat(n);

  return parseInt(newNumAsString);
}

console.log(largestNumber(2));
console.log(largestNumber2(3));
console.log(largestNumber(4));
console.log(largestNumber(5));

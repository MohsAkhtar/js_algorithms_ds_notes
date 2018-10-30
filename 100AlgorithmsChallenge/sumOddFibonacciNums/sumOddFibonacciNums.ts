function sumOddFibonacciNums(num: number): number {
  let sum = 0;
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    if ((a + b) % 2 !== 0 && a + b <= num) {
      sum += a + b;
    }
    result.push(a + b);
  }

  //return result[num];

  return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));

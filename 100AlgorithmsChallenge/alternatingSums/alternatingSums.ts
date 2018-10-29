function alternatingSums(a: number[]): number[] {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? (sumEven += a[i]) : (sumOdd += a[i]);
  }

  return [sumEven, sumOdd];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

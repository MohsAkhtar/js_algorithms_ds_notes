function candies(n: number, m: number): number {
  return n * Math.floor(m / n);
}

console.log(candies(3, 10));

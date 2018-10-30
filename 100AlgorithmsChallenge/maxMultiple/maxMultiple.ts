function maxMultiple(divisor: number, bound: number): number {
  const remainder = bound % divisor;
  return bound - remainder;
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(3, 20));

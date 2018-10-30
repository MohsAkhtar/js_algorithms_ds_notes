function sumAllPrimes(num: number): number {
  let primes = [];
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  console.log(primes);

  for (let num of primes) {
    sum += num;
  }

  return sum;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));

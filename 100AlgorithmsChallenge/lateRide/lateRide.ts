function lateRide(n: number): number {
  const hours = Math.floor(n / 60);
  const mins = n % 60; // get remainder
  const digits = (hours.toString() + mins.toString()).split('');
  let sum = 0;

  for (let digit of digits) {
    sum += parseInt(digit);
  }

  return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));

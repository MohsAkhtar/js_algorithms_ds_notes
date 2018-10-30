function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      const pairSum = numbers[i] + numbers[j];
      const pairDistance = Math.abs(i - j);

      if (sum === pairSum) {
        if (distance === -1 || distance > pairDistance) {
          distance = pairDistance;
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));

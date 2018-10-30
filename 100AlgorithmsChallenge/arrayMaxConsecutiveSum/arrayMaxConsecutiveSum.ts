function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0;
  let sum = 0;
  let counter = k;

  for (let i = 0; i < k; i++) {
    max += inputArray[i];
  }

  for (let i = k - 1; i < inputArray.length; i++) {
    if (counter === 0) {
      counter = k;
      sum = 0;
    }

    counter--;
    sum += inputArray[i];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

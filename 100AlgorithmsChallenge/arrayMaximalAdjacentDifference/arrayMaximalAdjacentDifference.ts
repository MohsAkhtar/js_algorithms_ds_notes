function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let currentDiff = Math.abs(inputArray[i] - inputArray[i + 1]);

    if (currentDiff > max) {
      max = currentDiff;
    }
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 5]));

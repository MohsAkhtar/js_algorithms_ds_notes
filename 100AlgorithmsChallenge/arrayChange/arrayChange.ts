function arrayChange(inputArray: number[]): number {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let changeNeeded = inputArray[i] + 1 - inputArray[i + 1]; // (inputArray[i] + 1) as result needs to be 1 higher
      inputArray[i + 1] = inputArray[i] + 1;
      count += changeNeeded;
      console.log(count);
    }
    console.log(inputArray);
  }

  return count;
}

//console.log(arrayChange([1, 1, 1]));
//console.log(arrayChange([2, 1, 1]));
console.log(arrayChange([2, 0, 1]));

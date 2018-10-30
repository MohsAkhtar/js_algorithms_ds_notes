function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const result = [];

  inputArray.forEach(number => {
    if (number === elemToReplace) {
      result.push(substitutionElem);
    } else {
      result.push(number);
    }
  });

  return result;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

// in place, use index in for each
function arrayReplaceInPlace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });

  return inputArray;
}

console.log(arrayReplaceInPlace([1, 2, 1], 1, 3));

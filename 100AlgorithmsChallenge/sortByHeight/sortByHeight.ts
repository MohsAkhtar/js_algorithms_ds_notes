function sortByHeight(a: number[]): number[] {
  let filteredArray = a.filter(number => {
    return number !== -1;
  });
  let sortedArray = filteredArray.sort((a, b) => a - b);
  let result = [];

  for (let num of a) {
    if (num === -1) {
      result.push(num);
    } else if (num > -1) {
      result.push(sortedArray[0]);
      sortedArray.shift();
    }
  }

  return result;
}

console.log(sortByHeight([-1, 150, 200, 170, -1, -1, 160, 180]));

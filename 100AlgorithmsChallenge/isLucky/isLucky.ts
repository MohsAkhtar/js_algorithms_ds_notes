function isLucky(n: number): boolean {
  let nToArray = n.toString().split("");
  let firstHalfSum = 0;
  let secondHalfSum = 0;

  for (let i = 0; i < nToArray.length / 2; i++) {
    firstHalfSum += parseInt(nToArray[i]);
  }

  for (let j = nToArray.length - 1; j >= nToArray.length / 2; j--) {
    secondHalfSum += parseInt(nToArray[j]);
  }
  return firstHalfSum === secondHalfSum;
  console.log(firstHalfSum);
  console.log(secondHalfSum);
}

console.log(isLucky(1230));
console.log(isLucky(239017));
console.log(isLucky(111003));

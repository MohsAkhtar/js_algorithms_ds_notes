function palindromeRearranging(inputString: string): boolean {
  const chars = inputString.split('');
  const lettersObject = {};
  let oddCounter = 0;

  for (let char of chars) {
    if (!lettersObject[char]) {
      lettersObject[char] = 1;
    } else {
      lettersObject[char]++;
    }
  }

  for (let key in lettersObject) {
    if (lettersObject[key] % 2 !== 0) {
      oddCounter++;
    }
  }

  return oddCounter > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabbba'));

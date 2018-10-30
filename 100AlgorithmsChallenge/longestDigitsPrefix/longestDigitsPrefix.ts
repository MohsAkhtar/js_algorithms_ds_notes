function longestDigitsPrefix(inputString: string): string {
  const digitsArray = '0123456789'.split('');
  const inputArray = inputString.split('');
  const result = [];

  for (let char of inputArray) {
    if (digitsArray.includes(char)) {
      result.push(char);
    } else {
      return result.join('');
    }
  }

  return result.join('');
}

function nanApproach(inputString: string): string {
  let prefix = '';

  for (let char of inputString) {
    const num = parseInt(char);

    if (isNaN(num)) {
      break;
    }

    prefix += char;
  }

  return prefix;
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('1e3aa1'));
console.log(longestDigitsPrefix('a53aa1'));
console.log(nanApproach('153aa1'));

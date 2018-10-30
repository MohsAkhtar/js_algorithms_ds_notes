function pigLatin(str: string): string {
  const vowels = 'aeiou'.split('');
  let strArr = str.split('');
  let result = '';

  for (let vowel of vowels) {
    if (strArr[0].includes(vowel)) {
      return str + 'way';
    }
  }

  while (true) {
    if (!vowels.includes(strArr[0])) {
      result = result + strArr[0];
      strArr.splice(0, 1);
    } else {
      result = strArr.join('') + result + 'ay';
      break;
    }
  }

  return result;
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));

function isCaseInsensitivePalindrome(inputString: string): boolean {
  const reverse = inputString
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  return reverse === inputString.toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));

function isCaseInsensitivePalindrome2(inputString: string): boolean {
  let reverse = '';

  for (let char of inputString.toLowerCase()) {
    reverse = char + reverse;
  }

  return reverse === inputString.toLowerCase();
}

console.log(isCaseInsensitivePalindrome2('AaBaa'));
console.log(isCaseInsensitivePalindrome2('abac'));

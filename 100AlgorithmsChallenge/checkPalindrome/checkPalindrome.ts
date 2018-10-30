function checkPalindrome(inputString: string): boolean {
  const reversed = inputString
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

  return reversed === inputString.toLowerCase();
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

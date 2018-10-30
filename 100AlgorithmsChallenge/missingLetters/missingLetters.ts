function missingLetters(str: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let char of alphabet) {
    if (!str.includes(char)) {
      return char;
    }
  }

  return undefined;
}
console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));

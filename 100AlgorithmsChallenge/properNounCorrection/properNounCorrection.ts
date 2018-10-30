function properNounCorrection(noun: string): string {
  const firstChar = noun[0].toUpperCase();
  const lowercaseInput = noun.slice(1, noun.length).toLowerCase();
  return firstChar + lowercaseInput;
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));

function characterParity(symbol: string): string {
  const symbolParsed = parseInt(symbol);

  // to check if NaN have to use isNaN(symbolParsed)
  if (isNaN(symbolParsed)) {
    return 'NaN';
  } else {
    if (symbolParsed % 2 === 0) {
      return 'even';
    } else if (symbolParsed % 2 !== 0) {
      return 'odd';
    }
  }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

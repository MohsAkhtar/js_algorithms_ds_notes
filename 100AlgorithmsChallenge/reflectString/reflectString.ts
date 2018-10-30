// finish the object**
function reflectString(inputString: string): string {
  const chars = inputString.split('');
  const reflectedAlphabet = {
    a: 'z',
    b: 'x'
  };
  let reflectedString = '';

  chars.forEach(char => {
    reflectedString += reflectedAlphabet[char];
  });

  return reflectedString;
}

console.log(reflectString('name'));

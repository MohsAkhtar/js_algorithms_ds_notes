function stolenLunch(note: string): string {
  let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 0
  };
  let result = '';

  for (let char of note) {
    if (cipher.hasOwnProperty(char)) {
      result += cipher[char];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

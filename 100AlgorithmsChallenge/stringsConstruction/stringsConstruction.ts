function stringsConstruction(a: string, b: string): number {
  let charMapA = buildCharMap(a);
  let charMapB = buildCharMap(b);
  let count = [];

  for (let char in charMapA) {
    if (charMapB.hasOwnProperty(char)) {
      count.push(Math.floor(charMapB[char] / charMapA[char]));
    } else {
      return 0;
    }
  }

  return Math.min(...count);
}

function buildCharMap(str) {
  let map = {};

  for (let char of str) {
    if (map.hasOwnProperty(char)) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  return map;
}

console.log(stringsConstruction('abc', 'abccba'));

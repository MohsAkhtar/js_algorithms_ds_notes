function differentSymbolsNaive(s: string): number {
  const sMap = buildMap(s);

  return Object.keys(sMap).length;
}

function buildMap(str) {
  let map = {};

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  return map;
}

// using includes() is not very efficient
function uniqueSymbolsUsingArray(str) {
  const uniqueChars = [];
  const inputChars = str.split("");

  inputChars.forEach(char => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars;
}

function usingObject(str) {
  const uniqueChars = {};
  const inputChars = str.split("");

  inputChars.forEach(char => {
    uniqueChars[char] = 1; // good because each char is added once
  });

  return Object.keys(uniqueChars).length;
}

function usingSet(str) {
  const uniqueChars = new Set(); // all vals have to be unique even if we add duplicates (ignores duplicates)
  const inputChars = str.split("");

  inputChars.forEach(char => {
    uniqueChars.add(char);
  });
  console.log(uniqueChars);

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));
console.log(usingSet("cabca"));

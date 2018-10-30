function convertString(s: string, t: string): boolean {
  let sMap = buildMap(s);
  let tMap = buildMap(t);

  for (let char in tMap) {
  }
}

function buildMap(str) {
  let map = {};

  for (let char of str.split("")) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  return map;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));

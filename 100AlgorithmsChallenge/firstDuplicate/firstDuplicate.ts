function firstDuplicate(a: number[]): number {
  const map = {};

  for (let num of a) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      return num;
    }
  }

  return -1;
}

// with hasOwnProperty()
function firstDuplicate2(a: number[]): number {
  const map = {};

  for (let num of a) {
    if (map.hasOwnProperty(num)) {
      return num;
    }
    map[num] = 1;
  }

  return -1;
}

console.log(firstDuplicate2([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate2([2, 4, 3, 5, 1]));

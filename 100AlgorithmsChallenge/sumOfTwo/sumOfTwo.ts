function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const mapA = buildMap(a);
  const mapB = buildMap(b);
  console.log(mapB);
  console.log(mapA);

  for (let num in mapA) {
    let counterpart = v - parseInt(num);
    console.log(counterpart);

    if (mapB.hasOwnProperty(counterpart)) {
      return true;
    }
  }

  return false;
}

function buildMap(arr) {
  let map = {};

  for (let num of arr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  return map;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 33));

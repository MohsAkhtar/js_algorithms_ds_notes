function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;
  const sortedStatues = statues.sort((a, b) => a - b);
  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for (let i = min; i <= max; i++) {
    if (!sortedStatues.includes(i)) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([4, 3, 1]));

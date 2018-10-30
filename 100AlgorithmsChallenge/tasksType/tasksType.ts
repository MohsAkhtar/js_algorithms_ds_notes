function tasksTypes(deadlines: number[], day: number): number[] {
  let today = 0;
  let upcoming = 0;
  let later = 0;

  for (let task of deadlines) {
    if (task <= day) {
      today++;
    } else if (day + 1 <= task && task <= day + 7) {
      upcoming++;
    } else {
      later++;
    }
  }

  let result = [];
  result.push(today, upcoming, later);
  return result;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

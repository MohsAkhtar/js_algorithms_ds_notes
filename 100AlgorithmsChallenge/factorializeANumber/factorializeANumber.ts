function factorializeANumber(num: number): number {
  if (num <= 1) {
    return 1;
  }

  return num * factorializeANumber(num - 1);
}

function iterativeFactorial(num: number): number {
  let factorial = num;

  for (let i = 1; i < num; i++) {
    factorial *= i;
  }

  return factorial;
}
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

function evenDigitsOnly(n: number): boolean {
  let nToArray = n.toString().split("");

  return nToArray.every(num => parseInt(num) % 2 === 0);
}

console.log(evenDigitsOnly(228622));
console.log(evenDigitsOnly(642386));

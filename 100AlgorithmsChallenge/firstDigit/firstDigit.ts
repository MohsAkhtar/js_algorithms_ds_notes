function firstDigit(inputString: string): string {
  const strArr = inputString.split("");
  const digits = "1234567890".split("");

  for (let char of strArr) {
    if (digits.includes(char)) {
      return char;
    }
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));

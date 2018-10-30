function integerToStringOfFixedWidth(number: number, width: number): string {
  let strNumber = number.toString();

  if (strNumber.length > width) {
    return strNumber.substr(width);
  } else if (strNumber.length < width) {
    let zeroes = width - strNumber.length;
    let padStart = "";
    for (let i = 0; i < zeroes; i++) {
      padStart = padStart.concat("0");
    }
    return padStart.concat(strNumber);
  }

  return strNumber;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

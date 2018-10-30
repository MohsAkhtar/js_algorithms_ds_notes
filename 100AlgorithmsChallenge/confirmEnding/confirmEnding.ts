function confirmEnding(str: string, target: string) {
  const startOfSubString = str.length - target.length;
  return str.substr(startOfSubString) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

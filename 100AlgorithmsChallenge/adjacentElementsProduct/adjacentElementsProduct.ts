function adjacentElementsProduct(inputArray: number[]): number {
  let maxProduct = inputArray[0] * inputArray[1]; // can't be zero in case we have negative product

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (maxProduct < product) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, 15, 7, 3]));

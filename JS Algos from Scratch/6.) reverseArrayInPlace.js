// Be sure to manipulate the array passed in
// Do not push elements into a new array and return that array
// Do not use array.reverse() method

// loops through arr.length / 2 as without the / 2 we will loop through entire array and swap back again

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  console.log(arr);
  return arr;
}

reverseArrayInPlace([1, 2, 3, 4]);

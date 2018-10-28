// returns every pair of numbers from array that adds up to sum
// Result should always be an array of arrays
// Any num can be used in multiple pairs
function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;

    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }

    hashtable.push(currNum);
  }

  console.log(pairs);
  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);

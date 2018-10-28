function meanMedianMode(arr) {
  // call other 3 functions
  // return obj which has mean, median and mode on it
  const result = {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };

  console.log(result);
}

function getMean(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });

  return sum / arr.length;
}

function getMedian(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  if (arr.length % 2 === 0) {
    const mid1 = arr[arr.length / 2 - 1];
    const mid2 = arr[arr.length / 2];
    return (mid1 + mid2) / 2;
  } else if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
}

function getMode(arr) {
  let modeObj = {};

  arr.forEach(num => {
    if (!modeObj[num]) {
      modeObj[num] = 0;
    }
    modeObj[num]++;
  });

  let maxFreq = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFreq) {
      modes = [num];
      maxFreq = modeObj[num];
    } else if (modeObj[num] === maxFreq) {
      modes.push(num);
    }
  }

  // edge case for if numbers appear at same freq
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }

  return modes;
}

meanMedianMode([1, 2, 3, 4, 5, 6]);
meanMedianMode([9, 10, 23, 10, 23, 9]);

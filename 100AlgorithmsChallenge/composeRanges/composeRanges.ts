function composeRanges(nums: number[]): string[] {
  let result = [];
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff === 1) {
      temp.push(nums[i]);
    } else {
      result.push([temp[0] + "->" + nums[i]]);
      temp = [];
    }
  }

  return result;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));

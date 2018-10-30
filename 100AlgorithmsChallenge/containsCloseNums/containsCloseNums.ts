// Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j
// in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.
function containsCloseNums(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return Math.abs(j - i) <= k;
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 7, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 7, 3, 5, 3], 2));

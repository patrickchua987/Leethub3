/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

visited = {};
for (let i = 0; i < nums.length; i++) {
  const current = nums[i];
  const numbertwo = target - current;
  const index2 = visited[numbertwo];
  if (index2 != null) {
    return [index2, i];
  } else {
    visited[current] = i;
  }
}
}
    
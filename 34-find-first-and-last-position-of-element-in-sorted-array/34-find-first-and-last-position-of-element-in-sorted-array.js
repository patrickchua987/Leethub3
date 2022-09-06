/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
  
  strategy
  we need to find the position starting and ending of the given target
  1. find the first element using binary search
  2. find the second element using binary search
  3. return the first and second position
 
 */
var searchRange = function(nums, target) {
    const firstIndex = findelement(nums, target, true);
if (firstIndex === -1) return [-1, -1];
const lastIndex = findelement(nums, target, false);
return [firstIndex, lastIndex ];


function findelement(nums, target, firstIndexFlag) {
  var low = 0;
  var high = nums.length-1;
  var position = -1;
  while (low <= high) {
    var middle = parseInt((low + high) / 2);
    if (nums[middle] === target) {
        position=middle;
      if (firstIndexFlag) {
          high = middle - 1;
      } else {
      low = middle + 1;}
    } else {
      if (nums[middle] < target) { low = middle + 1}
      else {
      high = middle - 1;}
    }
  }
  return position;
}
};
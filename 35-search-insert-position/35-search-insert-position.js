/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 strategy
 1. find the target from the array list using binary search.
 2. if found return the position
 3. if not found return the position were it should be.
 */

var searchInsert = function(nums, target) {
var low = 0;
var high = nums.length - 1;
while (low <= high) {
  middle = Math.floor((low + high) / 2);
  if (nums[middle] === target) {
    return middle;
  } else {
    if (nums[middle] < target) {
       low = middle +1
    } else {
       high = middle -1;
    }
  }
}
if (nums[middle] < target) return middle+1;
return middle;
};


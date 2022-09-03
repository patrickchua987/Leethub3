/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
   nums.sort((a, b) => a - b);
  const triplets = [];
  let closestsum = 100000;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let firstnum = i + 1;
    let lastnum = nums.length - 1;
    while (firstnum < lastnum) {
      const sumtotal = nums[i] + nums[firstnum] + nums[lastnum];

      if (Math.abs(target - sumtotal) < Math.abs(target - closestsum))
        closestsum = sumtotal;

      if (sumtotal > target) {
        lastnum--;
      } else if (sumtotal < target) {
        firstnum++;
      } else {
        return sumtotal;
          
        firstnum++;
        while (nums[firstnum] === nums[firstnum - 1] && firstnum < lastnum)
          firstnum++;
      }
    }
  }
  return closestsum;
};
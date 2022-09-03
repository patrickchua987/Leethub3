/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    var triplets =[];
    for (i=0;i < nums.length-2 && nums[i] <= 0; i++) {
        if (nums[i] === nums[i-1] && i>0) continue;
        let firstnum=i+1;
        let lastnum= nums.length-1;
        while (firstnum < lastnum) {
            const sumtotal = nums[i]+ nums[firstnum] + nums[lastnum];
            if (sumtotal > 0) {
                lastnum--;
            } else if (sumtotal < 0) {
                firstnum++;
            } else {
                triplets.push([nums[i],nums[firstnum],nums[lastnum]]);
                firstnum++;
                while (nums[firstnum] === nums[firstnum-1] && firstnum < lastnum) firstnum++;
            }
        }
    }
    return triplets;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 4sum with recursive approach
 function ksum will create the 2 loop and get the first 2 number
 while loop will get the other 2 number
 when the 4 number sum equal target then push to the quadruplets array
 */
var fourSum = function(nums, target) {

nums.sort((a, b) => a - b);
const quadruplets = [];
const quadfixnum = []
if (nums.length<4) return [];

if (nums.length===4) {
  if (nums[0]===0 && nums[1]===0 && nums[2]===0 && nums[3]===0){
    if (target===0) return [nums];
    if (target===1) return [];
  } 

}
ksum(4,0,target);

return quadruplets;

function ksum(k,start,target) {
       if (k !==2) {
           for (let i = start; i < nums.length - k+1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                    quadfixnum.push(nums[i]);
                    ksum(k-1,i+1,target - nums[i]);
                    quadfixnum.pop()
           }
           return
       }
    let firstnum = start;
    let lastnum = nums.length - 1;
	
    while (firstnum < lastnum) {
      const sumtotal =  nums[firstnum] + nums[lastnum];
      if (sumtotal > target) {
        lastnum--;
      } else if (sumtotal < target) {
        firstnum++;
      } else {
          quadruplets.push(quadfixnum.concat(nums[firstnum],nums[lastnum]));
          //console.log('push',quadfixnum.concat(nums[firstnum],nums[lastnum]));
          firstnum++;
          while (nums[firstnum] === nums[firstnum - 1] && firstnum < lastnum) firstnum++;
      }
    }
  }
}
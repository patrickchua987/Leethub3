/**
 * @param {number} x
 * @return {boolean}
 // strategy
 // recursive 
 // compare the first character vs the last characters
 */
var isPalindrome = function(x) {
let x2 = x;
let total =0;
while (x > 0) {
  total = total * 10 +(x % 10);
  x = Math.floor(x / 10);
}
return x2===total;
};

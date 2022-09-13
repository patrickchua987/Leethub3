/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {

let palindrome = x.toString().split("").reverse().join('');

if(palindrome === x.toString()){
   return true;
}
return false;
};
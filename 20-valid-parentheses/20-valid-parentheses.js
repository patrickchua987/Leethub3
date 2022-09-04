/**
 * @param {string} s
 * @return {boolean}
 
 Strategy 
 since we are required to validate if the input string is valid, we need to store in 
 the stacj whenever we encouter opening character "(" "["  and "{"  so that when 
 we encounter the reverse character ")", "}", "]", we can match it the top most
 element in the stack by poping it out.  If it match then continue through the loop.
 once the loop finish and we still have element in the stack it means the string is not
 valid as it should have been pop out if all is match.
 
 1. loop the string
 2. if it is opening character store the element in stack
 3. if it is not , the pop out stack and check if it the reverse of the current element.
    if it is , then just continue.
 4. end of loop, return true if stack has no more element, else return false.
 
 
  */
var isValid = function(s) {
var s2 = s.split("");
var stack = [];
if (s2.length <= 1) return false;
   stack.push(s2[0]);
    for (let i = 1; i < s2.length; i++) {
      if (
        (s2[i] === ")" && stack.pop() === "(") ||
        (s2[i] === "]" && stack.pop() === "[") ||
        (s2[i] === "}" && stack.pop() === "{")
      )  console.log('ok');
     else {
        stack.push(s2[i]);
      } 
     }
     return stack.length ===0;
}

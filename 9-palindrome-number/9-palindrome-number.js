/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x,xx=x.toString()) {
    
   // let xx = x.toString();
   console.log(x,xx.charAt(0)===xx.charAt(xx.length-1));
               
    if (xx.length ===0 || xx.length===1) return true;
       
    if (xx.charAt(0)===xx.charAt(xx.length-1)) {
      // if (xx.length===2) return true;
        console.log('huli',xx.substring(1,xx.length-1),
                   parseInt(xx.substring(1,xx.length-1)));
       return isPalindrome(parseInt(xx.substring(1,xx.length-1)),
                          xx.substring(1,xx.length-1));
    }
    return false;
};

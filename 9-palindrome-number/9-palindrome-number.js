/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x,xx=x.toString()) {
   
  //console.log(x,xx.charAt(0)===xx.charAt(xx.length-1));
               
    if (xx.length ===0 || xx.length===1) return true;
       
    if (xx.charAt(0)===xx.charAt(xx.length-1)) {
       if (xx.length===2) return true;
        
       return isPalindrome(parseInt(xx.substring(1,xx.length-1)),
                          xx.substring(1,xx.length-1));
    }
    return false;
    
    //isPalindrome(x);
};

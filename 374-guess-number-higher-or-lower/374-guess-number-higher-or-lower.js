/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 0;   
    let high = n;   
    
    while (low <= high) {    
        let Middle = Math.floor((low + high) / 2);    
        if (guess(Middle) == 0) {   
		    return Middle;
        }
        else if (guess(Middle) == -1) {    
            high = Middle - 1;
        }
        else {    
            low = Middle + 1;
        }
    }
};


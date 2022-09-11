/**
 * @param {number} n
 * @return {string[]}
 CONDITION
1. ONLY ADD "(" IF OPEN < N
2. ONLY ADD ")" IF CLOSED < OPEN
3. VALID IF OPEN = CLOSED = N
 */
var generateParenthesis = function(n) {
    let stack =[];
    let res = [];
    
    function backtrack(openN, closedN) {
        if (openN === closedN && n===openN) {
            res.push(stack.join(""));
            return
        }
        
        if (openN < n) {
            stack.push("(");
            backtrack(openN+1, closedN);
            stack.pop();           
        }
        
        if (closedN < openN) {
            stack.push(")");
            backtrack(openN,closedN+1);
            stack.pop();
        }
       
    }
     backtrack(0,0);
     return res;
};
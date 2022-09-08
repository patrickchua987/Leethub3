/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 strategy
 1. loop the nums
 2. store the element if the index is between the left and the right
 3. loop the numgs again
 4. replace the value of the element when the index is between the left and right
 */

var reverseBetween = function(head, left, right) {
    let stack = [];
    let ctr = 1;
    current = head;
    let leftpointer=Infinity;
    let leftctr=0;
    while (current && ctr <= right) {
        if ( ctr >= left && ctr <= right) {
            if (ctr=== left) {
                leftpointer=current;
                leftctr=ctr;
            }
            
            stack.push(current.val);
        }
        current = current.next
        ctr++;
    }
    //current = head;
    current = leftpointer;
    ctr =leftctr;
    while (current && ctr <= right) {
        if (ctr >= left && ctr <= right) {
            current.val = stack.pop();
        }
        current = current.next;
        ctr++;
    }
    return head;
}
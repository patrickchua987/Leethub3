/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * strategy
 1. loop the linked list and store it in stack.
 2. loop again the linked list and alternatively insert to a new
    linked list the array ang the element in the stack
 */
var reorderList = function(head) {
     let nodeArr = [];
    let curr = head, count = 0, next;
    while(curr) {
        next = curr.next;
        curr.next = null;
        nodeArr.push(curr);
        curr = next;
        count++;
    }
    head = nodeArr[0];
    curr = null;
    const length = nodeArr.length;
    for(let i = 0; i < length-i-1; i++) {
        next = nodeArr[i+1];
        if(curr) {
            curr.next = nodeArr[i];
            curr = curr.next;
            curr.next = nodeArr[length-i-1];
            curr = curr.next;
        }
        else {
            nodeArr[0].next = nodeArr[length-i-1];
            curr = nodeArr[length-i-1];
        }
    }
    if(count%2 !== 0 && curr) {
        curr.next = next;
    }
};
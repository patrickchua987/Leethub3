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
     let arr = [];
  
  // traverse linked list and push each node to storage array
  let node = head;
  while (node) {
      arr.push(node);
      node = node.next;
  }
  
  let result = [arr[0]];    
  let value = 0;
  let n = arr.length;
  
  // iterage storage array and add nodes to the result list accroding to index rules
  for (let i = 1; i < arr.length; i++) {
      if (i % 2 === 0) {
          value++;
          result[i] = arr[value];
      } else {
          n--;
          result[i] = arr[n];
      }
  }
  
  // put next arrows back to each node
  for (let i = 0; i < result.length; i++) {
      result[i].next = result[i+1] || null;
  }
  
  // return the head
  return result[0];
};
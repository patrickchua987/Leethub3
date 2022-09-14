/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   
current = head;
let AA = [];
let ctr = 0;
while (current) {
  AA.push(current.val);
  current = current.next;
  ctr++;
}
let middle = Math.floor(ctr / 2);
ctr = 0;
current=head;
while (ctr < middle) {
  if (current.val === AA.pop()) {
      current = current.next;
      ctr++;
      continue;
  }
  return false;
}
return true;
 
};
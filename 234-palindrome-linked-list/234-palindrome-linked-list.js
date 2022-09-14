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
fast = head;
slow = head;

// find middle (slow)
while (fast && fast.next) {
    fast = fast.next.next;
	slow = slow.next;
}

// reverse second  half
prev = null;
while (slow) {
      tmp = slow.next;
	  slow.next = prev;
	  prev = slow;
	  slow = tmp;
}

// check palidrome
left = head;
right = prev;
while (right) {
    if (left.val != right.val) return false;
	left = left.next;
	right = right.next;
}
return true;
}
 

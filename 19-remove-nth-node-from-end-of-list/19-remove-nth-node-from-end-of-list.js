/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
	tail = dummyNode;
    
    // set variables for next node and current node
    let left = dummyNode;
    let right = dummyNode;
	
    // move right n node 
    while (n >= 0 && right) {
        right = right.next;
        n=n-1;
    }
	
	// now left and right is now separated by n node.
    //move both left and right until end of list
    while (right) {
        left = left.next;
        right = right.next;
    }
	
    // once it reach the end of list
    // left is pointing to the node 3 , so just point the left.next it to node 5
    //  left.next.next , this will disconnect node 4 an will be deleted
    left.next = left.next.next;
    
    // just return the new list excluding the dummyNode
    return dummyNode.next;
};
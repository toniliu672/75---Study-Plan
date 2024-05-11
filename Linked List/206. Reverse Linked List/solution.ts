/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Iterative Solution
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        const nextNode: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}

// Recursive Solution
function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    const reversedHead: ListNode | null = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return reversedHead;
}
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

function pairSum(head: ListNode | null): number {
    if (!head || !head.next) {
        return 0;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let res: number = 0;

    while (fast.next && fast.next.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let curr: ListNode | null = slow.next;
    slow.next = null;

    let prev: ListNode | null = null;
    while (curr) {
        const temp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let p: ListNode | null = head;
    let q: ListNode | null = prev;
    while (q) {
        res = Math.max(res, p!.val + q.val);
        p = p!.next;
        q = q.next;
    }

    return res;
}
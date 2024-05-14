/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const result: number[] = [];

    while (queue.length) {
        const levelSize = queue.length;
        let rightValue: number | null = null;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            rightValue = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(rightValue!);
    }

    return result;
}
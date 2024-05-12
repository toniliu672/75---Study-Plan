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

function goodNodes(root: TreeNode | null): number {
    let count = 0;

    const dfs = (node: TreeNode | null, maxVal: number) => {
        if (!node) return;
        if (node.val >= maxVal) {
            count++;
            maxVal = node.val;
        }
        dfs(node.left, maxVal);
        dfs(node.right, maxVal);
    };

    dfs(root, root!.val);
    return count;
}
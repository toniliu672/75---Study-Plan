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

function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = 0;

    const dfs = (node: TreeNode | null, currSum: number, targetSum: number, path: number[]) => {
        if (!node) return;
        currSum += node.val;
        if (currSum === targetSum) count++;
        dfs(node.left, currSum, targetSum, [...path, node.val]);
        dfs(node.right, currSum, targetSum, [...path, node.val]);

        for (let i = 0; i < path.length; i++) {
            currSum -= path[i];
            if (currSum === targetSum) count++;
        }
    };

    dfs(root, 0, targetSum, []);
    return count;
}
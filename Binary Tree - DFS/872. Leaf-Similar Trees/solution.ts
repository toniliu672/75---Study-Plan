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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const getLeaves = (root: TreeNode | null): number[] => {
        if (!root) return [];
        if (!root.left && !root.right) return [root.val];
        const leaves: number[] = [];
        if (root.left) leaves.push(...getLeaves(root.left));
        if (root.right) leaves.push(...getLeaves(root.right));
        return leaves;
    };

    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);

    if (leaves1.length !== leaves2.length) return false;

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false;
    }

    return true;
}
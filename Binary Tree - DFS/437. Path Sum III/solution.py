# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        self.count = 0
        
        def dfs(node, curr_sum, target_sum, path):
            if not node:
                return
            curr_sum += node.val
            if curr_sum == target_sum:
                self.count += 1
            dfs(node.left, curr_sum, target_sum, path + [node.val])
            dfs(node.right, curr_sum, target_sum, path + [node.val])
            
            for i in range(len(path)):
                curr_sum -= path[i]
                if curr_sum == target_sum:
                    self.count += 1
        
        dfs(root, 0, targetSum, [])
        return self.count
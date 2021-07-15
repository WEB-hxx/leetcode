// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   const res = []
   const inorder = (root) =>{
       if(!root) {
           return
       }
       inorder(root.left)
       res.push(root.val)
       inorder(root.right)
   }
   inorder(root)
   return res
};


// 迭代的时候需要显式地将这个栈模拟出来
var inorderTraversal = function(root) {
    const res = []
    const stk = []
    while(root || stk.length) {
        while(root) {
            stk.push(root)
        }
        root = stk.pop()
        res.push(root.val)
        root=root.right
    }
    return res
 };



// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 输入二叉树：[3,9,20,null,null,15,7],
// 输出： [[3],[9,20],[15,7]]

var levelOrder = function(root) {
    if(!root) return []
    const queue = [root]
    const levels = []

    while(queue.length !== 0) {
        const queueLen = queue.length
        const currLevel = []
        for(let i=0;i<queueLen;i++) {
            const current = queue.shift()
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right)
            }
            currLevel.push(current.val)
        }
        levels.push(currLevel)
    }

    return levels
   
 };
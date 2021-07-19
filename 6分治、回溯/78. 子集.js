// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 链接：https://leetcode-cn.com/problems/subsets

var subsets = function(nums) {
   let res = []
   let path = []
   let dfs = function(index) {
       res.push(path.slice()) 
       for(let i=index;i<nums.length;i++) {
           path.push(nums[i])
           dfs(i+1)
           path.pop()
       }
   }
   dfs(0)
   return res
}

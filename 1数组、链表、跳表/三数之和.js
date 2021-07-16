// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 链接：https://leetcode-cn.com/problems/3sum
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
   nums.sort((a,b)=>a-b)
   const result = []
   for(let i=0; i<nums.length;i++) {
       let low = i+1, high=nums.length-1, sum=0
       while(low<high){
           sum = nums[i]+nums[low]+nums[high]
           if(sum === 0) {
               result.push([nums[i],nums[low],nums[high]])
               while(nums[low+1] === nums[low]) low++
               while(nums[high-1] === nums[high]) high--
               low++
               high--
           } else if(sum<0){
               low++
           } else {
               high--;
           }
       }
       while(nums[i+1] === nums[i]) i++
   }
   return result
};

var threeSum = function(nums) {
    var sets = [];
    if (nums.length < 3 || nums === null) return [];
    nums = nums.sort((a,b) => a-b);
    for (var i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        var target = 0 - nums[i];
        var j = i+1;
        var k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                sets.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j+1]) j++;
                while (j < k && nums[k] === nums[k-1]) k--;
                j++;
                k--;
            }
            else if (nums[j] + nums[k] < target) {
                j++;
            }
            else {
                k--;
            }
        }
    }
    return sets;
};

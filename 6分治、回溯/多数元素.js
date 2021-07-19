// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1：

// 输入：[3,2,3]
// 输出：3

// 链接：https://leetcode-cn.com/problems/majority-element

// 暴力发
var majorityElement2 = function(nums) {
    for(let i=0;i<nums.length;i++) {
      var index = 0
      for(let j=0;j<nums.length;j++){
        if(nums[i]===nums[j]){
            index++
            if(index>nums.length/2) return nums[i]
        }
      }
       
    }
};


var majorityElement = function(nums) {
    let n = nums.length
   let sort = nums.sort((a,b)=>a-b)
   console.log(sort[Math.floor(n/2)])

}


var majorityElement = function(nums) {
    var obj = {};
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};

var majorityElement3 = function(nums) {
    
    // Boyer-Moore Voting Algorithm
    
    let count = 0, candidate = 0
    
    for (let num of nums) {
        if (count == 0) {
            candidate = num
        }
        count += num == candidate ? 1 : -1
        console.log(count)
    }
    return candidate
};

majorityElement3([3,1,1,1,2,2,1])
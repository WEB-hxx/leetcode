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

var isCovered = function(ranges, left, right) {
    let n = ranges.length
    let set = new Set()
    for(let i=0;i<n;i++) {
        let L = n[i][0]
        let R = n[i][1]
        while(L <= R) {
           set.add(L)                                         
           L++
        }
       
    }
    for(let i=left;i<=right;i++) {
        if(!set.has(i)) {
           return false
        }
    }
    return true
   
};
isCovered([[25,42],[7,14],[2,32],[25,28],[39,49],[1,50],[29,45],[18,47]],1,50)

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 链接：https://leetcode-cn.com/problems/3sum
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum3 = function(nums) {
   nums.sort((a,b)=>a-b)
   const result = []
   for(let i=0; i<nums.length;i++) {
       let low = i+1, high=nums.length-1, sum=0
       while(low<high){
           sum = nums[i]+nums[low]+nums[high]
           if(sum === 0) {
               result.push([nums[i],nums[low],nums[high]])
            //    while(nums[low+1] === nums[low]) low++
            //    while(nums[high-1] === nums[high]) high--
               low++
               high--
           } else if(sum<0){
               low++
           } else {
               high--;
           }
       }
    //    while(nums[i+1] === nums[i]) i++
   }
//    console.log(result)
   return result
};
threeSum3( [-1,0,1,2,-1,-4])

 let result = [[-1,-1,2],[-1,0,1],[-1,0,1]]
let ss = [...new Set(result)]
console.log(ss)

// 暴力法
var threeSum = function(nums) {
   let res = []
   for(let i=0;i<nums.length-2;i++){
     for(let j=i+1;j<nums.length-1;j++){
        for(let k=j+1;k<nums.length;k++){
            if(nums[i]+nums[j]+nums[k]==0){
               res.push([nums[i],nums[j],nums[k]])
            }
        }
     }
   }
   return res
};


// 解题思路：
//  先数组排序，排序完后遍历数组，以 nums[i] 作为第一个数 first ，以 nums[i+1] 作为第二个数 second ，将 nums[nums.length - 1] 作为第三个数 last ，
//判断三数之和是否为 0 ，

// 如 <0 ，则 second 往后移动一位（nums 是增序排列），继续判断
// 如 >0 ，则 last 往前移动一位（nums 是增序排列），继续判断
// 如 ===0 ，则进入结果数组中，并且 second 往后移动一位， last 往前移动一位，继续判断下一个元组
// 直至 second >= last 结束循环，此时， nums[i] 作为第一个数的所有满足条件的元组都已写入结果数组中了，继续遍历数组，
// 直至 i === nums.length - 2 (后面需要有 second 、 last )
const threeSum2 = function(nums) {
    if(!nums || nums.length < 3) return []
    let result = [], second, last
    // 排序
    nums.sort((a, b) => a - b) 
    for (let i = 0; i < nums.length ; i++) {
        if(nums[i] > 0) break
        // 去重
        if(i > 0 && nums[i] === nums[i-1]) continue
        second = i + 1
        last = nums.length - 1
        while(second < last){
            const sum = nums[i] + nums[second] + nums[last]
            if(!sum){
                // sum 为 0
                result.push([nums[i], nums[second], nums[last]])
                // 去重
                while (second<last && nums[second] === nums[second+1]) second++ 
                while (second<last && nums[last] === nums[last-1]) last--
                second ++
                last --
            }
            else if (sum < 0) second ++
            else if (sum > 0) last --
        }
    }        
    return result
};
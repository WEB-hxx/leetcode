// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2


var searchInsert = function(nums, target) {
    let left=0
    let right = nums.length-1
    while(left<right) {
        // let mid = l + ((r - l) >> 1)
        const mid = Math.floor((right+left)/2)
        if(nums[mid]>target){
            right = mid-1
        }else if(nums[mid]<target) {
            left = mid+1
        }else{
            return mid
        }

    }
    return left
};


var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};


// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。
// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

var twoSum = function(numbers, target) {
   for(let i=0;i<numbers.length;i++){
       let l = i+1
       let r = numbers.length-1
       let tar = target - numbers[i]
       while(l<=r){
           let mid = Math.floor((l+r)/2)
           if(tar===numbers[mid]){
               return [i+1,mid+1]
           }
           if(tar>numbers[mid]){
               l=mid+1
           }else{
               r = mid-1
           }
       }
   }

};




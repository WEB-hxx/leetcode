// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 链接：https://leetcode-cn.com/problems/two-sum

// 暴力法，两层循环

var twoSum = function(nums, target) {
    let arr = []
    let numSize = nums.length
    for(let i = 0; i< numSize-1;i++) {
        for(let j = i+1; j<numSize; j++) {
            if(nums[i] + nums[j] == target){
               arr.push(i,j)
            }
        }
    }
    return arr
};

//hast 表

var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<=nums.length-1;i++){
        let j = target - nums[i]
        if(map.has(j)){
            return [map.get(j),i]
        }else{
            map.set(nums[i],i)
        }
    }
};
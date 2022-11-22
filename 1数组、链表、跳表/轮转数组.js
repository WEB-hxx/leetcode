// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 链接：https://leetcode.cn/problems/rotate-array

var rotate = function(nums, k) {
    k %= nums.length;
    var arr = nums.slice(nums.length-k)
    nums.splice(nums.length-k,k)
    nums.unshift(...arr)
    console.log(nums,arr)
};


let reverse = function(nums, start, end){
    while(start < end){
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
let rotate2 = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const len = digits.length;
    
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0) return digits;
    }
    digits.push(0)
    // console.log(digits)
    digits[0] = 1;
    return digits;
};
 plusOne([9,9,9])



 var canFormArray = function(arr, pieces) {
	let total = "";
    arr=arr.join("");
    console.log(arr.indexOf('161849') == -1)
    for (let i = 0; i < pieces.length; i++) {
      pieces[i] = pieces[i].join("");
      console.log(pieces[i])
      total += pieces[i];
      if (arr.indexOf(pieces[i]) == -1) return false;
    }
    return total.length == arr.length;
 };



var findSubarrays = function(nums) {
    let res = []
    let tot = []
    for(let i=0;i<nums.length-1;i++){
      res.push([nums[i],nums[i+1]])  
   }
   console.log(res)
   for(let k=0;k<res.length;k++){
     let item = res[k][0]+res[k][1]
      tot.push(item)
   }
   return [...new Set(tot)].length === tot.length
};



var uniquePaths = function(m, n) {
    let cur = new Array(n).fill(1);
    console.log(cur)
    for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
        cur[j] += cur[j-1];
      }
    }
    console.log(cur[n-1])
    return cur[n-1];
}    


var longestCommonSubsequence = function(text1, text2) {
  let res = []
   for(let i=0;i<text1.length;i++){
     for(let j=i+1;j<text1.length;j++){
        res.push([text1[i]+text1[j]])
     }
   }
   console.log(res)
};

longestCommonSubsequence("abcde","ace")
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

// 链接：https://leetcode-cn.com/problems/sliding-window-maximum

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]

var maxSlidingWindow = function(nums, k) {
    let count = nums.length-k+1
    let res = []
    for(let i=0;i<=count;i++){
         let s = nums.slice(i,i+k)
         res.push(Math.max(...s))
    }
    return res
   
}



var maxSlidingWindow = function(nums, k) {
   const dequeue = []
   const output = [];
   for(let i = 0; i<nums.length;i++) {
       while(nums[i]>dequeue.length-1){
          dequeue.pop()
       }
       dequeue.push(nums[i])

       if(i>k-1){
           output.push(dequeue[0])
           if(nums[i-k+1] === dequeue[0]){
                dequeue.unshift()
           }
       }
   }
   return output;
};


var maxSlidingWindow = function(nums, k) {
    const q = []
    const res = []
    for(let i=0;i<nums.length;i++){
        while(q && nums[q[q.length-1]]<=nums[i]){
            q.pop()
        }
        q.push(i)

        if(q[0] === i-k){
            q.shift()
        }
        if(i>=k-1){
            res.push(nums[q[0]])
        }
    }
    return res
}
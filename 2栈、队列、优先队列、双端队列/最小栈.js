// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

// 链接：https://leetcode-cn.com/problems/min-stack

// var MinStack = function() {
//     this.x_stack = [];
//     this.min_stack = [Infinity];
// };

// MinStack.prototype.push = function(x) {
//     this.x_stack.push(x);
//     this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
// };

// MinStack.prototype.pop = function() {
//     this.x_stack.pop();
//     this.min_stack.pop();
// };

// MinStack.prototype.top = function() {
//     return this.x_stack[this.x_stack.length - 1];
// };

// MinStack.prototype.getMin = function() {
//     return this.min_stack[this.min_stack.length - 1];
// };


// var maxSlidingWindow = function(nums, k) {
//     if (!nums.length) return []

//     let ans = [],
//         windows = []

//     for (let i = 0; i < nums.length; i++) {
//         if (i >= k && windows[0] <= i - k) windows.shift()
//         while(windows.length && nums[windows[windows.length-1]] <= nums[i]) windows.pop()
//         windows.push(i)
//         if (i >= k - 1) ans.push(nums[windows[0]])
//     }
    
//     return ans
// };


// var areAlmostEqual = function(s1, s2) {
//     if(s1===s2) return true
//     let len = s1.length
//     let nums = []
//     for(let i=0;i<len;i++){
//        if(s1[i]!=s2[i]){
//           nums.push(i)
//        }
//     }
//     if(nums.length!=2) return false
//     let arr = s1.split('')
//     let temp = arr[nums[1]];
//     arr[nums[1]] = arr[nums[0]] ;
//     arr[nums[0]] = temp;
//     return arr.join('') === s2

// };


var explorationSupply = function(station, pos) {
    let res = []
    let j = 0
   for(let i=0;i<station.length-1;i++){
      let item = station[i]-pos[j]
      if(station[0]>=pos[j]){
        res.push(0)
        ++j
      }
      if(item==0){
        res.push(i);
        ++j
      }
      console.log(station[i], pos[3], station[i+1])
      if(station[i+1]>pos[2] && pos[2]<station[i]){
       
         let item2 = station[i+1] - pos[j];
         let item = pos[j] - station[i];

         item<item2?res.push(i-1):res.push(i);
         
        
            j++
        }
      
   }
   console.log(res)
//    [0,3,2,0]
};

explorationSupply([2,5,8,14,17],[1,14,11,2])

// [2,5,8,14,17]
// [1,2,2,5,8,11,14,14,17]
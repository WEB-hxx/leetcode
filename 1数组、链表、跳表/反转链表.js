// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// https://leetcode-cn.com/problems/reverse-linked-list/
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

var reverseList = function (head) {
    let prev = null, curr=head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev=curr
        curr = next
    }
    return prev
}


var reverseList = function (head) {
   let prev = null, curr=head
   while(curr){
       let next = head.next
       curr.next = prev
       prev = curr
       curr = next 
   }
   return prev
}


// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
let s = "Let's take LeetCode contest"

var reverseWords = function(s) {
    let arr = s.split(' ')
    let res = []
    for(let i=0;i<arr.length;i++){
        const j = arr[i].split('').reverse().join('')
        res.push(j)
    }
   return res.join(' ')
    
};

var reverseWords2 = function(s) {
    let res = s.split(' ')
    for (let i = 0; i < res.length; i++) {
        let arr = res[i].split('')
        let left = 0, right = arr.length - 1
        while (left <= right) {
            swap(arr, left, right)
            left++
            right--
        }
        res[i] = arr.join('')
    }
    return res.join(' ')
};

const swap = (arr, left, right) => {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}


let reverse = function(nums, start, end){
    while(start < end){
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
let rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
   
    reverse(nums, 0, k - 1);
 
    reverse(nums, k, nums.length - 1);
    // console.log(nums)
    // return nums;
};
rotate( [1,2,3,4,5,6,7],2)



var moveZeroes = function(nums) {
    let j = 0;
    for(let i =0; i<nums.length;i++){
        if(nums[i]!==0){
            nums[j]=nums[i]
            if(i!=j){
                nums[i] = 0
            }
            j++
        }
    }
    console.log(nums)
    return nums
};

var maxArea = function(a) {
    let maxArea = 0
    for(let i=0,j=a.length-1;i<j;){
           let minHieht = a[i] < a[j] ? a[i++] : a[j--]
           let area = (j-i+1) * minHieht
         
           maxArea = Math.max(area, maxArea)
        
    }
    return maxArea
 };

 maxArea([1,8,6,2,5,4,8,3,7])


 let climbStairs = function(n) {
    if(n == 0 || n == 1 || n == 2){return n;}
     let mem = new Array(n);
     mem[0] = 1;
     mem[1] = 2; 
     
     for(let i = 2; i < n; i++){
         mem[i] = mem[i-1] + mem[i-2];
     }
     console.log(mem)
     return mem[n-1];
 }

 var removeDuplicates = function(nums) {
    if(nums.length == 0){return 0;}
    let slow = 0, fast = 1;
    while(fast < nums.length){
        if(nums[fast] != nums[slow]){
            slow++
            nums[slow] = nums[fast];
        }
        fast++
    }
    console.log(nums.splice(0,slow+1))
    return slow + 1;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
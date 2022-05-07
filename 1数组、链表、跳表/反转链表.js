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
    console.log(nums)
    // return nums;
};
rotate( [1,2,3,4,5,6,7],2)
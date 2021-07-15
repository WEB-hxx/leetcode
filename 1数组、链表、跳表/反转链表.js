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
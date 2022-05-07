// 快慢指针
// 这题整体其实类似于一个数学思路，可以通过画图结合理解下面的四步

// 先将 slow、fast 指针赋值为 head
// 然后 fast 后移 n 步
// 然后快慢指针 slow 和 fast 一起往后移动，直到 fast.next === null
// 此时 slow.next 就是要删除的结点，删除即可
// 注意点
// 当 fast 后移 n 步时，如果题目给的 n 与链表中总结点个数相同时，即 要删除的是头结点，那么 fast 会后移到链表外面，
// 即 fast === null，即可通过 fast 是否为空来决定要不要直接返回结果


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

arr= [1,2,3,4,5], n = 2  
// [1,2,3,5]
// var removeNthFromEnd = function(head, n) {
//     let slow = head, fast = head;
//     // 先让 fast 往后移 n 位
//     while(n--) {
//         fast = fast.next;
//     }

//     // 如果 n 和 链表中总结点个数相同，即要删除的是链表头结点时，fast 经过上一步已经到外面了
//     if(!fast) {
//         return head.next;
//     }

//     // 然后 快慢指针 一起往后遍历，当 fast 是链表最后一个结点时，此时 slow 下一个就是要删除的结点
//     while(fast.next) {
//         slow = slow.next;
//         fast = fast.next;
//     }
//     slow.next = slow.next.next;
//     return head
// }

var removes = function(head,n){
    let a = head.slice(-n)
    let b=a[0]
    for(let i=0;i<head.length;i++){
        if(head[i]===b){
            head.splice(i,1)
        }
    }
    return head
}
removes(arr,n)
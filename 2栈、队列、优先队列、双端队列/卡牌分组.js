// https://leetcode.cn/problems/x-of-a-kind-in-a-deck-of-cards/
// 输入：deck = [1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// var hasGroupsSizeX = function(arr) {
//    arr.sort((a, b)=> a-b)
//    let min = arr.length+1
//    console.log(min)
//    let dist = []
//    let result = true
//    for(let i=0,len=arr.length, tmp = [];i<len;i++) {
//      tmp.push(arr[i])
    
//      for(let j=i+1;j<len-1;j++){
//         if(arr[i] === arr[j]) {
//             tmp.push(arr[j])
            
//         }else{
//             if(min > tmp.length) {
//                 min = tmp.length
//             }
//             dist.push([].concat(tmp))
//             tmp.length = 0
//             i=j
//             break
//         }
//      }
//    }
//    console.log(dist,min)
//    dist.every(item=>{
//      if(item.length % min !==0){
//         console.log(dist)
//         result = false
//         return false
//      }
//    })
//    return result

// };

let hasGroupsSizeX = function(deck){
  let obj = {};
  for(let i of deck) {
      obj[i] = !obj[i] ? 1 : ++obj[i];
  }

  let arr = Object.values(obj);
 
  let res = arr[0];

  function gcd(x, y) {
    return x == 0 ? y : gcd(y%x, x);
  }
  console.log(arr.every(i => i))
  return arr.every(i => (res = gcd(res, i)) > 1);
 
}

let res = []
var generateParenthesis = function(n) {
   _gener(0,0,n,'')
   console.log(res)
   return res
};


var _gener = function(left,right,n,s){
    if(left==n && right ==n){
        res.push(s)
        return
    }
    if(left<n) _gener(left+1, right, n, s=s+'(')
    if(left>right) _gener(left, right+1, n, s=s+')')
}

generateParenthesis(3)
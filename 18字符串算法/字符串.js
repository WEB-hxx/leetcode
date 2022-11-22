var firstUniqChar = function (s) {
    const counts = new Array(26).fill(0); //长度为26的数组，存放字符的出现次数

    for (const c of s) { //遍历s，统计每个字符出现次数
        counts[c.charCodeAt(0) - 97]++; //97是a的Unicode值
    }
   
    for (let i = 0; i < s.length; i++) { //再次遍历s
        if (counts[s[i].charCodeAt(0) - 97] == 1) {//找出第一个频次为1的字符的索引
                           
            return i;
        }
    }
    return -1;
};

firstUniqChar('loveleetcode')


// console.log('123' == 123)   // false or true? true

// console.log('' == null)    // false or true?  false
// console.log('' == 0  )
//       // false or true?  true
// console.log([] == 0)
//       // false or true?  true
//  console.log([] == '')
//      // false or true? true
//  console.log([] == ![] )
//   // false or true?  true
//  console.log(null == undefined)
//  //  false or true?  true
// console.log(Number(null) )
//     // 返回什么？ 0
// console.log(Number('') )
//     // 返回什么？ 0
// console.log(parseInt(''))
//     // 返回什么？ NaN
//  console.log({}+10)  
//        // 返回什么？ [object Object]10

// let obj = {
//     [Symbol.toPrimitive]() {
//         return 200;
//     },

//     valueOf() {
//         return 300;
//     },

//     toString() {
//         return 'Hello';
//     }
// }

// console.log(obj + 200); // 这里打印出来是多少？



var canConstruct = function(ransomNote, magazine) {
    const countStr = function(s){
        const counts = new Array(26).fill(0); //长度为26的数组，存放字符的出现次数
        for (const c of s) { //遍历s，统计每个字符出现次数
            counts[c.charCodeAt(0) - 97]++; //97是a的Unicode值
        }
        return counts
    }
    const s1 = countStr(ransomNote),s2 = countStr(magazine)
    console.log(s2)
    for(let i=0;i<s1.length;i++){
       if(s1[i]>s2[i])
         return false
    }
    return true
          
};
 
var countConsistentStrings = function(allowed, words) {
    const dict = new Set(allowed);
    let res = 0;
   for (const s of words) {
        for (const c of s) {
            if (!dict.has(c)) continue;
        }
        res++;
    }
    return res;
};

countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])



var sumSubseqWidths = function(nums) {
    let arr = [[]];// 添加空数组
    let res = [];
    for (let i = 0; i < nums.length; i++) {// 控制循环次数
        let len = arr.length;// 获取arr的长度
        for(let j=0;j<len;j++){
           arr.push(arr[j].concat(nums[i]));
        } 
    }
    arr == arr.shift();
   for(let i=0;i<arr.length;i++){
      if(arr[i].length===1){
        res.push(0)
      }else{
        let min = Math.min.apply(null, arr[i])
        let max = Math.max.apply(null, arr[i])
        res.push(max-min)
      }
   }
   console.log(res.reduce((n,m) => n + m))
   return res.reduce((n,m) => n + m);
   
}



var unequalTriplets = function(nums) {
    let arr = [];// 添加空数组
    let sum = 0
    // for (let i = 0; i < nums.length; i++) {// 控制循环次数
    //     for(let j=i+1;j<nums.length;j++){
    //         for(let k=j+1;k<nums.length;k++){
    //            arr.push([nums[i],nums[j],nums[k]])
    //         } 
    //     }
    // }
    const res = [];
    const dfs = (index, list) => {
      let itemArr = list.slice();     // 调用子递归前，加入解集
      if(itemArr.length===3){
        res.push(itemArr);     // 调用子递归前，加入解集
      }
      for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
        list.push(nums[i]);       // 选这个数
        dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
        list.pop();               // 撤销选这个数
      }
    };
    dfs(0, []);
    console.log(res)
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i][0]!=arr[i][1] && arr[i][0]!=arr[i][2] && arr[i][1]!=arr[i][2]){
    //         sum++
    //     }
    // }
    // return sum
    
};

let unequalArr = function(nums){
    const res = [];
    const dfs = (index, list) => {
      let itemArr = list.slice();     // 调用子递归前，加入解集
    //   if(itemArr.length===3){
        res.push(itemArr);     // 调用子递归前，加入解集
    //   }
      for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
        list.push(nums[i]);       // 选这个数
        dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
        list.pop();               // 撤销选这个数
      }
    };
    dfs(0, []);
    console.log(res)
}

unequalArr([4,4,2,4,3])
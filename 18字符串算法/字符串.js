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

console.log(canConstruct("bg","bbfg"))

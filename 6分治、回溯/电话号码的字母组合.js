// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    let res = []
    let obj = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
   let dfs = (curstr,i) =>{ 
       if(i>digits.length-1){
           res.push(curstr)
           return
       }
       let letters = obj[digits[i]]
       for(letter of letters) {
           dfs(curstr+letter,i+1)
       }

   }
   dfs('',0)
   return res

};
letterCombinations('265')
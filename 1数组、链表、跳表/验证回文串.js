// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

// 思路  自顶向下的编程方式
// 1，去掉非字母和数字字符，全部转换成统一的大小写格式
// 2，倒序翻转比较原来的字符返回真假

var isPalindrome = function(s) {
    let s1 = filteredS(s)
    return s1 === reversedS(filteredS(s1))?true:false
 };
 
 var filteredS = function(s){
    return s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
 }
 
 var reversedS = function(filteredS){
     return filteredS.split('').reverse().join('')
 }
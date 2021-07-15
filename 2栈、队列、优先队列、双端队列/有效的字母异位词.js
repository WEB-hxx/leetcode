// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// https://leetcode-cn.com/problems/valid-anagram/
//异位 出现的字母一样，顺序不一样

// 排序暴力法
var isAnagram = function(s, t) {
   let s1 = s.split('').sort().join('')
   let s2 = t.split('').sort().join('')
   return s1===s2?true:false
};

// hast 法
var isAnagram = function(s, t) {
   if(s.length!==t.length) return false
   const counts = {}
   for(let c of s) {
       counts[c] = (counts[c] || 0) +1
   }    
   for(let c of t) {
       if(!counts[c]) return false
       counts[c]--
   }
   return true
};

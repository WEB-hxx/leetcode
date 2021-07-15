// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 链接：https://leetcode-cn.com/problems/valid-parentheses

// 暴力法 不断replace匹配的括号 o(n^2)

var isValid = function(s) {
  while(s.length){
      var temp = s
      s.replace('()','')
      s.replace('{}','')
      s.replace('[]','')
      if(s==temp) return false
  }
  return true

};

// stack 栈的解法

var isValid = function(s) {
   const stack = []
   for(let i=0;i<s.length;i++) {
       let c = s.charAt(i)
       switch(c) {
           case '(': stack.push(')');
              break;
            case '[': stack.push(']');
              break;
            case '{': stack.push('}');
              break;
            default:
                if(c !== stack.pop()){
                    return false
                }
       }
   }
   return stack.length === 0

};
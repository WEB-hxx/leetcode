// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// 链接：https://leetcode-cn.com/problems/generate-parentheses


var generateParenthesis = function(n) {
    let result = []
    var _generate = function(left, right, n, s) {
        if(left===n && right===n) { 
            result.push(s)  
            return     
        }
        if(left < n) {
            _generate(left+1, right, n, s + '(')
        }
        if(left > right){
            _generate(left, right+1, n, s + ')')
        }
    }
   _generate(0, 0, n, '')
   return result
};


function render(template, context) {
    
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key]);
    
  }
  
  const template = "{{name}}很厉name害，才{{age}}岁";
  
  const context = { name: "jawil", age: "15" };
  
console.log(render(template, context))  




function reverseBySeparator(string, separator){
    return string.split(separator).reverse( ).join(separator)
}
    
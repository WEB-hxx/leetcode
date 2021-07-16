// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

var generateParenthesis = function(n) {
    let res = []
    let dsf = function(left,right,path) {
        if(left>n || left<right) return;
        if(left + right === n*2){
            console.log(path)
            res.push(path)
            return
        }
        dsf(left+1, right, path+"(")
        dsf(left, right+1, path+")")
    }
    dsf(0,0,'')
   
    return res;
}
generateParenthesis(3)

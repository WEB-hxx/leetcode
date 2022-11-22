// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
//https://leetcode.cn/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {

    let modeArr = p.match(/([a-z.]\*|(\*\.))|([a-z]+(?=([a-z.]\*|(\*\.))|$))/g)
    let cur = 0
    let strLen = s.length
    for(let i=0, len = modeArr.length, m; i<len; i++) {
       m = modeArr[i].split('');
       if(m[1] === '*') {
         if(m[0]==='.'){
            cur = strLen
            break
         }else{
            while(s[cur]===m[0]){
                cur++
            }
         }
       }else{
         for(let j=0,jl = m.length;j<jl; j++){
            console.log(m[j],s[cur])
            if(m[j]==='*'){
                m[j] = s[cur]
            }
            if(m[j] !== s[cur]) {
                return false
            } else {
                cur++
            }
          }
       }
    }

    return cur === strLen
   
};

// isMatch("mississippi","mis*is*ip*.")


var isMatch1 = function(s,p) {
    const temp = s.match(p)
    if(!temp) return false;
    for(const str of temp){
        if(str === s) return true;
    }
    return false;
}


isMatch1("mississippi","mis*is*ip*.")


var exist = function(board, word) {
    let arr = board.flat(Infinity)
    let num = 0
    for(let i=0;i<word.length;i++){
       if(arr.indexOf(word[i])>-1){
          num++
          arr.splice(arr.indexOf(word[i]),1)
       }
    }
    console.log(num)
 
    return word.length === num 
    
 };

 exist([["a","b"],["c","d"]],"abcd")
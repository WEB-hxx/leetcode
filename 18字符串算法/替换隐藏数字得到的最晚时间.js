// 给你一个字符串 time ，格式为 hh:mm（小时：分钟），其中某几位数字被隐藏（用 ? 表示）。
// 有效的时间为 00:00 到 23:59 之间的所有时间，包括 00:00 和 23:59 。
// 替换 time 中隐藏的数字，返回你可以得到的最晚有效时间。
// 链接：https://leetcode-cn.com/problems/latest-time-by-replacing-hidden-digits

var maximumTime = function(time) {
    let arr =  Array.from(time)
    if(arr[0]==="?"){
        arr[0] = (arr[1]>='4' && arr[1]<='9') ? '1' : '2'
    }
    if (arr[1] === '?') {
        arr[1] = (arr[0] == '2') ? '3' : '9';
    }
    if (arr[3] === '?') {
        arr[3] = '5';
    }
    if (arr[4] === '?') {
        arr[4] = '9';
    }
    return arr.join('')
   
};


var maximumTime2 = function(time) {
    const map = { 
        0: 2, 
        1: 9, 
        3: 5, 
        4: 9
    };
    // console.log(map[1])
    return time.replace(/\?/g,(i, index, $) => {
    //     console.log(i, index, $)
      if (index === 1 && ($[0] == 2 || $[0] == "?")){
        return 3;
      }
      if (index === 0 && $[1] >=4) {
       
        return 1;
      };
    
      return map[index];
    })
  };
  
console.log(maximumTime2("?4:59"))


var p = new Promise((reslove,reject)=>{
    const s=888
    setTimeout(()=>{
       reslove(s)      
    })
})

p.then((res)=>{
  console.log(res)
})
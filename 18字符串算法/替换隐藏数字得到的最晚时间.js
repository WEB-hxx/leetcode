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
maximumTime("1?:22")
var arraySign = function(nums) {
    let sign = 1;
    for(let item of nums){
       if(item === 0) return  0
       if(item<0){
           sign = -sign
       }
    }
    return sign
};

arraySign([-1,-2,-3,-4,3,2,1])


var myAtoi = function(s) {
    const re = new RegExp(/^(-|\+)?\d+/);
    let str = s.trim().match(re);
    console.log(str)
    let res = str ? Number(str[0]) : 0;
    return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31))
  
};

var sumSubarrayMins = function(arr) {
    let res = []
    for(let i=0;i<arr.length;i++){
        // res.push([arr[i]])
        res.push([arr[i],arr[i+1],arr[i+2]]) 
        // for(let j=i;j<arr.length-1;j++){
        //     res.push([arr[j]])
        // }
    }
    console.log(res)
}

sumSubarrayMins([4,4,2,4,3])

/**
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(s) {
    const inter = [];
    // 加 ,
    for(let i = 2;i<s.length-1;i++) {
        inter.push(s.slice(0, i) + ',' + s.slice(i));
    }
    console.log(inter)
    const ans = [];
    // 列举可能
    for(let i = 0;i<inter.length;i++) {
        // 根据逗号分隔字符串，去除坐标值
        let [x, y] = inter[i].replace(/[\(\)]/g, '').split(",")
        console.log(x,y)
        // 保存左右坐标的所有可能
        const l = [], r = [];
        // 判断是否是0 - 9
        if(x.length > 1) { // 可以加 . 
            // 循环，列举 . 在每一个可能的位置，并判断坐标不会存在多余的零
            for(let j = 0;j<x.length;j++) {
                let f;
                if(j === 0) { // 可以不加 . 
                    f = x;
                } else {
                    f = x.slice(0, j) + '.' + x.slice(j);
                }
                let num = parseFloat(f) + ''; // 利用转换成浮点数来去掉多余的0
                if(f === num) l.push(f);
            }
        } else {
            // 0-9直接加入
            l.push(x)
        }
        // 与 x 坐标同理
        if(y.length > 1) {
            for(let j = 0;j<y.length;j++) {
                let f;
                if(j === 0) {
                    f = y;
                } else {
                    f = y.slice(0, j) + '.' + y.slice(j);
                }
                let num = parseFloat(f) + '';
                if(f === num) r.push(f);
            }
        } else {
            r.push(y)
        }
        // 循环，将x和y所有的可能交叉合并
        for(let m = 0;m<l.length;m++) {
            for(let n = 0;n<r.length;n++) {
                ans.push('(' + l[m] + ', ' + r[n] + ')')
            }
        }
    }
    return ans;
};



ambiguousCoordinates("00123")

["(0, 0.0123)","(0.001, 2.3)","(0.001, 23)","(0.0012, 3)"]
["(1, 2.3)","(1, 23)","(1.2, 3)","(12, 3)"]
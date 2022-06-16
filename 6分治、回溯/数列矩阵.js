

// 解题思路
// 先将二维数组转化为一维数组
// 判断给定的r和c能不能重构成新数组，若不能，直接返回原数组
// 根据c来重塑每一行的元素
// 根据r来重塑共有多少行
// 代码

// 输入：mat = [[1,2],[3,4]], r = 1, c = 4
// 输出：[[1,2,3,4]]
// [1,2,3,4]
const matrixReshape = (mat, r, c) => {
    const newMat = [];
    // 将二维数组转化为一维数组
    for (let i = 0; i < mat.length; i++) {
        newMat.push(...mat[i]);
    }
    // 判断能否重塑成功
    if (r * c !== newMat.length) return mat;
    // 一共有r行
   
    for (let i = 0; i < r; i++) {
        const item = [];
        // // 每行c个
     
        for (let j = 0; j < c; j++) {
            // 将c个元素从头部拿出，并放入暂存的item数组
            console.log(item)
            item.push(newMat.shift());
        }
        // 当前行收集完毕，推入新数组的尾部
        newMat.push(item);
        console.log(newMat)
    }
    // return newMat;
};
// matrixReshape([[1,2],[3,4]],1,4)


var generate = function(numRows) {
    let list = []
    for(let i = 1; i<= numRows; i++){                   // 先建个 数组  每行长度递增 , 每行的每个元素为1
      let arr = Array.apply(null,Array(i)).map(t => 1)
    //   let arr = Array.of(1)
    //   console.log(Array.apply(null,[1]))
      list.push(arr)
    }
  
    list = list.map((item,index) => {
      if(index >= 2){                       // 当第三行开始才有这个规律
        let last = list[index-1]
        // console.log(list[index])
        // console.log(list[index-1])
        list[index] = item.map((t,i) => {   // 把list 的 index 重新赋值 , 
          if(i > 0 && i < item.length - 1){ // 去除首尾项\
            console.log(last[i] + last[i-1])
            return last[i] + last[i-1]
          }
          return t
        })
        return list[index]
      }
      return item
    })
    // console.log(list)
    return list
  };
  
  generate(5)

arr4 = [1,2,3,4,5]
 let p = arr4.reduce((per,tot)=>{
      return per + tot
  },0)

  console.log(p)
  
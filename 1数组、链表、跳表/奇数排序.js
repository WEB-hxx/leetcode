/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 * 
 * 给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。
另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
对 indices[i] 所指向的每个位置，应同时执行下述增量操作：
ri 行上的所有单元格，加 1 。
ci 列上的所有单元格，加 1 。
给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。
链接：https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix

 */
 var oddCells = function(n, m, indices) {
    // 一. 生成 n * m 的矩阵
    let arr = []
    for(let i=0;i<n;i++){
       arr.push(Array(m).fill(0))
    }
  
    console.log(arr)
    // 二. 遍历坐标点, 坐标点在的 横竖 都加上1
    for(let n of indices){
        console.log(n)
      let [i, j] = n
      console.log(arr[i])
      arr[i] = arr[i].map(t => ++t)
      arr.forEach(r => r[j]++) 
    }

   
   
    // 三.  得到增量操作后的矩阵nm  遍历 然后 筛选出奇数
    let res = 0
    for(let item of arr){
      res += item.filter(t => t % 2 === 1).length
    }
    console.log(res)
    return res
  };
  
  oddCells(2,3,[[0,1],[1,1]])
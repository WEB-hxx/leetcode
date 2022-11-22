// 输入：s1 = "waterbottle", s2 = "erbottlewat"
// 输出：True

var isFlipedString = function(s1, s2) {
    return s1.length===s2.length && (s1+s1).indexOf(s2)!=-1
};
// "PvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDW SvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmb"
// "SvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmb PvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDW"
isFlipedString("a", "a")



const subsets = (nums) => {
    const res = [];
  
    const dfs = (index, list) => {
      let itemArr = list.slice();     // 调用子递归前，加入解集
      if(itemArr.length===3){
        res.push(itemArr);     // 调用子递归前，加入解集
      }
      for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
        list.push(nums[i]);       // 选这个数
        dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
        list.pop();               // 撤销选这个数
      }
    };
    dfs(0, []);
    console.log(res)
    // return res;
  };

  subsets([4,4,2,4,3])

var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};

var lastMaterial = function(material) {
  
  material.sort((a,b)=>a-b)
  let dfs = function(material){
    let len = material.length
    let item = material[len-1] - material[len-2]
    material.splice(len-2)
    material.push(item)
    material.sort((a,b)=>a-b)
    if(material.length>1){
      dfs(material)
    }
  }
  
  dfs(material)
  console.log(material)
  material.length===0 ? 0 : material[0]
  
};

lastMaterial([2,7,4,1,8,1])//[1,1,2,4,7,8]
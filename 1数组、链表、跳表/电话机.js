const tel = function(str){
  if(str === '') return []
  let map = ['', 1, 'abc' ,'def','ghi', 'jkL','mno','pqrs','tuv','wxyz' ]
  let num = str.split('')
  let code = []
  num.forEach(item => {
     if(map[item]) {
        code.push(map[item])
     }
  })
  if(num.length===1){
    return Array.from(code.join(''))
  }
 
  let comb = function(arr) {
    let tmp =[]
    for(let i =0; i<arr[0].length; i++){
       for(let j =0; j<arr[1].length; j++) {
          tmp.push(`${arr[0][i]}${arr[1][j]}`)
       }
    }
    arr.splice(0, 2, tmp)
    if(arr.length>1){
        comb(arr)
    }else{
        return tmp
    }
    return arr[0]
  }
  console.log(comb(code))
//   return comb(code)
}



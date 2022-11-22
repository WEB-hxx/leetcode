/**
 * 冒泡排序
 * 外循环控制需要比较的元素，比如第一次排序后，
最后一个元素就不需要比较了，内循环则负责两两元素比较，将元素放到正确位置上
*/
function bubbleSort(arr) {
    const len = arr.length
    for(let i=0; i<len; i++) {
        for(let j=0;j<len-1-i; j++) {
          // 注意边界值
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] // 交换位置
            }
        }
    }
    return arr
}

// console.log(bubbleSort([3,44,15,36,26,27,2,46,4,19,50,48]))
//[2,3,4,15,19,26,27,36,44,46,48,50]


// 选择排序
function selectSort(arr) {
    let min = []
    for(let i=0; i<arr.length; i++) {
        min=arr[i]
        for(let j=i+1;j<arr.length; j++) {
          // 注意边界值
            if(arr[j] < min){
                [arr[j],min] = [min,arr[j]] // 交换位置
            }
        }
        arr[i]=min
    }
    return arr
}


var trap = function(height) {
    let sum = 0;
    let max = Math.max(...height)//找到最大的高度，以便遍历。
    for (let i = 1; i <= 1; i++) {
        let isStart = false; //标记是否开始更新 temp
        let temp_sum = 0;
        for (let j = 0; j < height.length; j++) {
            if (isStart && height[j] < i) {
                temp_sum++;
            }
            if (height[j] >= i) {
                console.log(sum,temp_sum)
                sum = sum + temp_sum;
                console.log('ddsds',sum)
                temp_sum = 0;
                isStart = true;
            }
        }
    }
    return sum;
}
// trap([0,1,0,2,1,0,1,3,2,1,2,1])

var getMax = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
        }
    }
    return max;
}


var trap2 = function(height) {
  let left=0; let right=height.length-1;
  let sum=0;
  let leftMax=0, rightMax=0;
  while(left<=right){
     if(height[left]<=height[right]){
        if(height[left]>=leftMax){
            leftMax = height[left]
        }else{
            sum+=leftMax-height[left]
        }
        left++
     }else{
        if(height[right]>=rightMax){
            rightMax = height[right]
        }else{
            sum+=rightMax-height[right]
        }
        right--
     }
  }
  console.log(sum)
  return sum

}

trap2([0,1,0,2,1,0,1,3,2,1,2,1])
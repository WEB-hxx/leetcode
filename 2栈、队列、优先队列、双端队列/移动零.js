// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 思路
 
var moveZeroes = function(nums) {
    var j = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[j]=nums[i]
            if(i!=j){
                nums[i]=0
            }
             j++
        }
       
    }
};

var moveZeroes = function(nums) {
    if(nums==null) {
        return;
    }
    //两个指针i和j
    var j = 0;
    for(var i=0;i<nums.length;i++) {
        //当前元素!=0，就把其交换到左边，等于0的交换到右边
        if(nums[i]!=0) {
            var tmp = nums[i];
            nums[i] = nums[j];
            nums[j++] = tmp;
        }
    }
}
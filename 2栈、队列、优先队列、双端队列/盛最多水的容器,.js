// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。
// 链接：https://leetcode-cn.com/problems/container-with-most-water

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 1, 枚举 left var x, right bar y, (x-y)*height_diff  o(n^2)
 
var maxArea = function(height) {
    var max = 0
    for(var i=0;i<height.length-1;++i){
        for(var j=i+1;j<height.length;++j){
            var area = (j-i) * Math.min(height[i],height[j])
            max = Math.max(max, area)
        }
    }
    return max
};

//o(n) 左右边界 i, j 向中间收敛
var maxArea = function(height) {
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--];
        const area = (j - i + 1) * minHeight;
        max = Math.max(max, area);
    }
    return max;
};
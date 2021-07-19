// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。

// 输入：x = 2.00000, n = 10
// 输出：1024.00000

// 输入：x = 2.10000, n = 3
// 输出：9.26100


// 输入：x = 2.00000, n = -2
// 输出：0.25000
// 解释：2-2 = 1/22 = 1/4 = 0.25

// 链接：https://leetcode-cn.com/problems/powx-n



var myPow = function (x, n) {
    if (n === 0) return 1;
    let pow = Math.abs(n);
    let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
    return n < 0 ? 1 / result : result
}

// O(log2 N)
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return pow(x, n);

    function pow(x, n) {
        if (n === 0) {
            return 1.0;
        }
        const half = pow(x, parseInt(n / 2));
        if (n % 2 === 0) {
            return half * half
        } else {
            return half * half * 2
        }
    }
}
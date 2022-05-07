// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// dp
let climbStairs = function(n) {
    let dp = [0, 0]
    for(let i=2;i<=n;i++) {
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
}

var climbStairs2 = function(n) {
    if(n==0 || n == 1 || n==2) return n
    let men = new Array(n)
    men[0] = 1
    men[1] = 2
    for(let i=2;i<n;i++) {
        men[i] = men[i-1]+men[i-2]
    }
    return men[n-1]
}

var climbStairs3 = function(n) {
    let p=0,q=0,r=1;
    for(let i=1;i<=n;++i) {
        p=q;
        q=r;
        r=p+q;
    }
    return r;
}
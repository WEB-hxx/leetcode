// 方法1.dfs
// 复杂度：时间复杂度O(mn)，m、n分别是网格的长和宽。空间复杂度O(mn)，递归最大深度
// js：


const floodFill = (image, sr, sc, newColor) => {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor == newColor) return image;

    const fill = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
            return;
        }
        image[i][j] = newColor;
        fill(i - 1, j);
        fill(i + 1, j);
        fill(i, j - 1);
        fill(i, j + 1);
    };

    fill(sr, sc);
    return image;
};




// 方法2.bfs
// 复杂度：时间复杂度O(mn)，m、n分别是网格的长和宽。空间复杂度O(mn)，递归最大深度
// js：


const floodFill2 = (image, sr, sc, newColor) => {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];

    if (oldColor == newColor) return image;

    const queue = [[sr, sc]];

    while (queue.length) {
        const [i, j] = queue.shift();
        image[i][j] = newColor;

        if (i - 1 >= 0 && image[i - 1][j] == oldColor) queue.push([i - 1, j]);
        if (i + 1 < m && image[i + 1][j] == oldColor) queue.push([i + 1, j]);
        if (j - 1 >= 0 && image[i][j - 1] == oldColor) queue.push([i, j - 1]);
        if (j + 1 < n && image[i][j + 1] == oldColor) queue.push([i, j + 1]);
    }

    return image;
};



// DFS 递归操作 沉没岛屿

var maxAreaOfIsland = function(grid) {
    const row = grid.length, col = grid[0].length
    let maxIsland = 0
    const dfs = (i, j) => {
        //边界条件的判定
        if(i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) return 0
        //每次遍历过的岛屿（1）都置为0，也就是将岛屿沉默，这样就不会在dfs过程中遍历重复的岛屿
        grid[i][j] = 0
        let cntIsland = 1
        //向四个方向分别dfs并加和（可以用[1, -1, 0, 0]方向数组循环来优雅一点）
        cntIsland += dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
        return cntIsland
    }
    //开始遍历grid地图，因为遍历过的岛屿都沉没变成海，不会有重复计数
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            maxIsland = Math.max(maxIsland, dfs(i, j))
        }
    }
    return maxIsland
};
// BFS 栈操作 沉没岛屿

var maxAreaOfIsland = function(grid) {
    let maxIsland = 0
    let row = grid.length, col = grid[0].length
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            //对于海洋板块直接跳过
            if(grid[i][j] === 0) continue
            //bfs的解题模板，建立bfs栈以及始点
            let bfs = [[i, j]]
            let cntIsland = 0
            //bfs栈不断弹出，直至全部遍历完成
            while(bfs.length){
                let [x, y] = bfs.shift()
                //边界条件
                if(x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) continue
                cntIsland++
                grid[x][y] = 0
                //向上下左右bfs遍历，向栈中加入符合条件的元素（岛屿）
                bfs.push([x - 1, y])
                bfs.push([x + 1, y])
                bfs.push([x, y - 1])
                bfs.push([x, y + 1])
            }
            maxIsland = Math.max(maxIsland, cntIsland)
        }
    }
    return maxIsland
}




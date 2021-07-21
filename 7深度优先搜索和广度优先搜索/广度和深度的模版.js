// 这是深度优先算法的栈实现， 后进的先出
function DFS(node) {  
    var nodeList = [];  
    if (node) {  
        var stack = [];  
        stack.push(node);  
        while (stack.length != 0) {  
            var childrenItem = stack.pop();  
            nodeList.push(childrenItem);  
            var childrenList = childrenItem.children;  
            for (var i = childrenList.length - 1; i >= 0; i--)  
                stack.push(childrenList[i]);  
        }  
    }    
    return nodeList;  
}   
var root = document.getElementById('root')
console.log(DFS(root))

// 这是广度优先算法的队列实现， 先进的先出
function BFS(node) {  
    var nodes = [];  
    if (node != null) {  
        var queue = [node];  
        while (queue.length != 0) {  
            var item = queue.shift();  
            nodes.push(item);  
            var children = item.children;  
            for (var i = 0; i < children.length; i++)  
                queue.push(children[i]);  
        }  
    }  
    return nodes;  
}
var root = document.getElementById('root');
console.log(BFS(root)); 
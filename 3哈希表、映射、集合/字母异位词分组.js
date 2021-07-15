// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 链接：https://leetcode-cn.com/problems/group-anagrams
// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]）

var groupAnagrams = function(strs) {
  const map = {}
  for(const str of strs) {
       const sorted = str.split('').sort().join('')
       if(!map[sorted]) {
           map[sorted] = [str]
       } else {
           map[sorted].push(str)
       }
      
  }

  return Object.values(map)

}

var groupAnagrams = function(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};


var groupAnagrams = function(strs) {
    strs = strs.sort();
    var mapping = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sorted = str.split('').sort().join('');
        
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};
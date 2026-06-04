class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n = strs.length;
        let groups = {}
        
        for (let i = 0; i < n; i++) {
            let frequencyMap = new Array(26).fill(0);
            for (let char of strs[i]) {
                frequencyMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            
            let key = frequencyMap.join(',');
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(strs[i]);
        }
        
        return Object.values(groups);
    }
}

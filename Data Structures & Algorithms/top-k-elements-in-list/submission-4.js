class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let sortedArr = nums.sort();

        let maxCount = 0
        const numbersMap = new Map();
        
        let frequentElements;

        if(nums.length === 1) {
            return nums
        }

        for(let i = 0; i < nums.length; i++) {
            numbersMap.set(nums[i], 1); // initialize first
        }


        
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === nums[i-1]) {
            numbersMap.set(nums[i], (numbersMap.get(nums[i]) || 1) + 1)
            }
        }

        frequentElements = [...numbersMap.entries()]
        .sort((a, b) => b[1] - a[1]) // sort by count descending
        .slice(0, k)                  // take top k
        .map(entry => entry[0]); ;

        return frequentElements;
    }
}

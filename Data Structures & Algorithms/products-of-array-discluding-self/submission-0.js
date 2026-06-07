class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let output = [];
        let leftArr = []
        let rightArr = []
        let rightProduct = 1;
        let leftProduct = 1

        for(let i = 0; i < n; i++) {
            // left prefix 
            leftArr.push(leftProduct);
            leftProduct *= nums[i]

            let rightIndex = n - 1 - i;
            rightArr.unshift(rightProduct);
            rightProduct *= nums[rightIndex] 
        }

        const result = leftArr.map((num, index) => num * rightArr[index])

        return result;
    }
}

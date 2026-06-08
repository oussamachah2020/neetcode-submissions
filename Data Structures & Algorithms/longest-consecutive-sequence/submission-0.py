class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        n = set(nums)
        longest = 0

        for num in n:
            if num - 1 not in n:
                current = num
                streak = 1

                while current + 1 in n:
                    current += 1
                    streak += 1

                longest = max(longest,streak)

        return longest
        
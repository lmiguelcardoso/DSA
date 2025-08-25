from typing import List

class Solution:
    
     def removeDuplicates(self, nums: List[int]) -> int:
        mapNums = {}
        uniqueNums = 0
        i = 0
        while i < len(nums):
            num = nums[i]
            
            if num not in mapNums:
                mapNums[num] = 1
                uniqueNums += 1
                i +=1
                continue
            
            for index in range(i+1, len(nums)):
                nums[index - 1] = nums[index]
            
            nums.pop()
        
        return uniqueNums
        
     def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        uniqueNums = 1
        
        for i in range(1, len(nums)):
            if nums[i] != num[uniqueNums - 1]:
                nums[uniqueNums] = nums[i]
                uniqueNums += 1


        return uniqueNums
        

print(Solution.removeDuplicates(Solution,[1,1,2,3,4]))
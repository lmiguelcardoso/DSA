var twoSum = function (nums, target) {
    const mapNums = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (mapNums.hasOwnProperty(complement)) {
            return [mapNums[complement], i];
        }
        mapNums[num] = i;
    }
    return null;
};

console.log(twoSum([2, 7, 11, 15], 17));

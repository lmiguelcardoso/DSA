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

var twoSumTwoPointersApproach = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    nums = nums.sort((a, b) => a - b);

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum > target) right--;

        if (sum < target) left++;

        if (sum == target) return [left, right];
    }
};

console.log(twoSumTwoPointersApproach([2, 7, 25, 15, 26, 13], 17));

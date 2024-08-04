var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let lowest = Number.MIN_SAFE_INTEGER;

    if (nums[left] > nums[right]) {
        while (nums[right] > nums[right - 1]) right--;

        lowest = nums[right];
    } else {
        while (nums[left] > nums[left + 1]) left++;

        lowest = nums[left];
    }

    return lowest;
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;

        if (nums[left] > nums[right]) {
            left++;
        } else {
            right--;
        }
    }

    return -1;
};

console.log(search([3, 1], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));

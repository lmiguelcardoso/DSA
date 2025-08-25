var removeDuplicates = function (nums) {
    let k = 0;
    let seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[k] = nums[i];
            k++;
        }
    }
    return nums;
};

console.log(removeDuplicates([1, 1, 2]));

var removeDuplicates2 = function (nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (k === 0 || k === 1 || nums[k - 2] != nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return nums;
};
console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]));

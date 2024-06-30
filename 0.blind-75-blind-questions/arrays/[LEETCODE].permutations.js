var permute = function (nums) {
    const result = [];
    if (nums.length == 1) return [nums];

    for (let i = 0; i < nums.length; i++) {
        const num = nums.pop();

        const permutation = permute(nums);
        for (let perm of permutation) {
            result.push([...perm, num]);
        }
        nums.unshift(num);
    }

    return result;
};

console.log(permute([1, 2, 3]));

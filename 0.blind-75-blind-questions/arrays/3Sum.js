var threeSum = function (nums) {
    const results = [];
    nums.sort((a, b) => a - b); //[ -4, -1, -1, 0, 1, 2 ]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];

            if (sum == 0) {
                results.push([nums[left], nums[right], nums[i]]);

                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }

            if (sum > 0) {
                right--;
            }

            if (sum < 0) {
                left++;
            }
        }
    }
    return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

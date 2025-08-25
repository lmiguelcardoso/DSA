var productExceptSelf = function (nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < result.length; i++) {
        result[i] = leftProduct;
        leftProduct = leftProduct * nums[i];
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

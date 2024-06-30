var productExceptSelf = function (nums) {
    const productArray = [];

    for (let i = 0; i < nums.length; i++) {
        let productElement;
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            const num = nums[j];
            productElement = productElement == undefined ? num : num * productElement;
        }
        productArray.push(productElement);
    }

    return productArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

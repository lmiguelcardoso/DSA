var majorityElement = function (nums) {
    let mapElements = new Map();
    let maxValue = -Infinity;
    let maxKey = 0;

    for (let num of nums) {
        let count = (mapElements.get(num) || 0) + 1;
        mapElements.set(num, count);

        if (count > maxValue) {
            maxValue = count;
            maxKey = num;
        }
    }

    return maxKey;
};

console.log(majorityElement([3, 2, 3]));

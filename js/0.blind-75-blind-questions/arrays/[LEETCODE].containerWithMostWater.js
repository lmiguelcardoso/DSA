var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let currentHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let area = width * currentHeight;

        maxArea = Math.max(maxArea, area);

        if (height[left] > height[right]) right--;
        else left++;
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

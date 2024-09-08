var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (k >= 0) {
        if (j < 0) break;

        if (i >= 0 && nums1[i] > nums2[j]) {
            // considering both arrays are ordered
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums1[j];
            j--;
        }
        k--;
    }
    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

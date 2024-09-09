var strStr = function (haystack, needle) {
    if (needle === '') return 0;

    for (let i = 0; i < haystack.length; i++) {
        let k = i;
        let j = 0;

        while (haystack[k] === needle[j] && j < needle.length) {
            k++;
            j++;
        }

        if (j === needle.length) return i;
    }

    return -1;
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leet'));
console.log(strStr('a', 'a'));

var isSubsequence = function (s, t) {
    let left = 0;
    let seen = 0;

    if (s === '') return true;

    while (left < t.length) {
        if (seen > 0 && seen === s.length) return true;

        if (t[left] === s[seen]) {
            seen++;
        }
        left++;
    }

    return seen === s.length;
};

console.log(isSubsequence('aa', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));

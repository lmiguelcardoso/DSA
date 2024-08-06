var lengthOfLongestSubstring = function (s) {
    let arrChars = [];
    let longestSubstring = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (!arrChars.some((char) => char === c)) {
            arrChars.push(c);

            if (arrChars.length > longestSubstring) {
                longestSubstring = arrChars.length;
            }
            continue;
        }

        const firstAppearingIndex = arrChars.indexOf(c);

        arrChars.splice(0, firstAppearingIndex + 1);

        arrChars.push(c);
    }
    return longestSubstring;
};

var lengthOfLongestSubstringSlidingWindow = function (s) {
    let seen = {};
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        seen[s[i]] = (seen[s[i]] || 0) + 1;

        while (seen[s[i]] > 1) {
            seen[s[start]]--;
            start++;
        }
        maxLength = Math.max(maxLength, seen.length);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('substring'));

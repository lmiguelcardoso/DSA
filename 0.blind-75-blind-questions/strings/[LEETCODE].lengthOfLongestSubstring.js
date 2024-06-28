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

console.log(lengthOfLongestSubstring('abcabcbb'));

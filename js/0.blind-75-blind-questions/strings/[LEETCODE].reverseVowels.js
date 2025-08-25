var reverseVowels = function (s) {
    let left = 0;
    let right = s.length - 1;
    let sArray = s.split('');
    let vowels = 'aeiouAEIOU';
    while (left < right) {
        console.log(left);
        if (!vowels.includes(s[left])) {
            left++;
            continue;
        }

        if (!vowels.includes(s[right])) {
            right--;
            continue;
        }

        [sArray[left], sArray[right]] = [sArray[right], sArray[left]];

        left++;
        right--;
    }

    return sArray.join('');
};
console.log(reverseVowels('aA'));

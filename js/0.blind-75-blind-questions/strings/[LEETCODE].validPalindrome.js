var isPalindrome = function (s) {
    s = s.toLowerCase();
    // /init/
    //^ not
    // [a-z]
    //match all string, not only the first one
    // /end/
    const stringNormalized = s.replace(/[^a-z0-9]/g, '');
    const reversedString = stringNormalized.split('').reverse().join('');
    return stringNormalized === reversedString;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));

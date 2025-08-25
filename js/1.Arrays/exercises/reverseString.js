const reverseString = (string) => {
    const reversedString = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString.push(string[i]);
    }
};

reverseString('abacate');

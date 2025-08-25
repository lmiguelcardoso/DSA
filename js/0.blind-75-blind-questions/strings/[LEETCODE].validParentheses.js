var isValid = function (s) {
    const mapBrackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const bracketsStack = [];
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];

        const isOpeningBracket = mapBrackets[bracket];

        if (isOpeningBracket) {
            bracketsStack.push(bracket);
            continue;
        }

        const correctBrackets = Object.entries(mapBrackets).find(([key, value]) => value === bracket);
        const lastBracket = bracketsStack.pop();
        const isValidOperation = lastBracket === correctBrackets[0] && bracket == correctBrackets[1];
        if (!isValidOperation) return false;
    }
    return bracketsStack.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('(('));

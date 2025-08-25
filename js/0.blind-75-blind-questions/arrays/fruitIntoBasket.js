var totalFruit = function (fruits) {
    let start = 0;
    let maxFruit = 0;
    let state = new Map();

    for (let i = 0; i < fruits.length; i++) {
        state.set(fruits[i], (state.get(fruits[i]) || 0) + 1);

        while (state.size > 2) {
            state.set(fruits[start], state.get(fruits[start]) - 1);
            if (state.get(fruits[start]) === 0) {
                state.delete(fruits[start]);
            }
            start++;
        }

        maxFruit = Math.max(maxFruit, i - start + 1);
    }
    return maxFruit;
};

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));

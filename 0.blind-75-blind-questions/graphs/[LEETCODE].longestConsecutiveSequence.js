var longestConsecutive = function (nums) {
    const setNums = new Set(nums);
    let higherSequence = 0;
    for (let num of setNums) {
        const belongsToASequence = setNums.has(num - 1);

        if (belongsToASequence) continue;
        let sequence = 1;

        while (setNums.has(num + sequence)) {
            sequence++;
        }

        higherSequence = Math.max(higherSequence, sequence);
    }

    return higherSequence;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

var containsDuplicate = function (nums) {
    const mapItem = {};

    for (let num of nums) {
        if (!mapItem[num]) {
            mapItem[num] = 1;
            continue;
        }
        return true;
    }
    return false;
};

console.log([1, 2, 3, 1]);

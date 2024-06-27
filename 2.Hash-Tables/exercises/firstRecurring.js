// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

const firstRecurring = (array) => {
    const mapNumbers = new Map();

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (!mapNumbers.get(element)) {
            mapNumbers.set(element, 1);
            continue;
        }
        return element;
    }
    return undefined;
};

console.log(firstRecurring([2, 6, 6, 2, 3, 5, 1, 2, 4]));

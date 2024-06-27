const mergeSortedArr = (arr1, arr2) => {
    const mergedArr = [];
    let indexArr1 = 0;
    let indexArr2 = 0;

    while (indexArr1 < arr1.length && indexArr2 < arr2.length) {
        let itemArr1 = arr1[indexArr1];
        let itemArr2 = arr2[indexArr2];

        if (itemArr1 < itemArr2) {
            console.log(itemArr1);
            mergedArr.push(itemArr1);
            indexArr1++;
        } else {
            mergedArr.push(itemArr2);
            indexArr2++;
        }
    }

    return mergedArr;
};

console.log(mergeSortedArr([1, 5, 50], [0, 3, 53]));

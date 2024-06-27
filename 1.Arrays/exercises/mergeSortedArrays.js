const mergeSortedArr = (arr1, arr2) => {
    const mergedArr = [];
    let itemArr1 = arr1[0];
    let itemArr2 = arr2[0];

    while (itemArr1 && itemArr2) {
        console.log(itemArr1 + ' ' + itemArr2);
        if (!itemArr2 || itemArr1 < itemArr2) {
            mergedArr.push(itemArr1);
            arr1.shift();
        } else {
            mergedArr.push(itemArr2);
            arr2.shift();
        }
    }

    return mergedArr;
};

console.log(mergeSortedArr([1, 5, 3], [53, 0, 3]));

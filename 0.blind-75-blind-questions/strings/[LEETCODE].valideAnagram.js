var isAnagram = function (s, t) {
    const uniqueIdentifierS = t.split('').sort().join();
    const uniqueIdentifierT = s.split('').sort().join();

    return uniqueIdentifierS == uniqueIdentifierT;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

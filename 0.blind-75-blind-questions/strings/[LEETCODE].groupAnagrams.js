var groupAnagrams = function(strs) {
    const mapAnagrams = new Map()

    for (let i = 0; i < strs.length; i++) {
        const anagram = strs[i];
        const anagramIdentifier = anagram.split("").sort().join("")
        let anagramInMap = mapAnagrams.get(anagramIdentifier)
        if(mapAnagrams.has(anagramIdentifier)){

            mapAnagrams.set(anagramIdentifier, [...anagramInMap ,anagram] )

            continue
        }

        mapAnagrams.set(anagramIdentifier, [anagram] )
    }
    const groupedAnagrams = []

    mapAnagrams.forEach((value,key)=>{
        groupedAnagrams.push(value)
    })
    
    return groupedAnagrams;

};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
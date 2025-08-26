from typing import List


class Solution:

    def encode(self, strs: List[str]) -> str:
        encodedStr = ""
        
        for string in strs:
            encodedStr += str(len(string)) + "#" + string
            
        return encodedStr
    
    def decode(self, s: str) -> List[str]:
        decodedStrs = []
        
        i = 0
        
        while i < len(s):
            j = i
            
            while s[j] != "#":
                j += 1
            
            length = int(s[i:j])
            firstLetter = s[j+1]
            lastLetter = s[j+1+length]
            word = s[firstLetter:lastLetter]
            decodedStrs.append(word)
            i = j + 1 + length
        
        return decodedStrs

// group all anagrams together

function groupAnagrams(words){
    let anagram = {};

    for (const word of words) {
        let sortedKey = word.split(" ").sort().join(" ");

        if (!anagram[sortedKey]) {
            anagram[sortedKey] = [];
        }
        anagram[sortedKey].push(word);
    }
    return Object.values(anagram);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
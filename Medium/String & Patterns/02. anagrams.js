// group all anagrams together

function groupAnagrams(words){
   let anagrams = {};

   for (const word of words) {
    let sortedKey = word.split(' ').sort().join(' ');

    if (!anagrams[sortedKey]) {
        anagrams[sortedKey] = [];
    }
    anagrams[sortedKey].push(word);
   }
   return Object.values(anagrams)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
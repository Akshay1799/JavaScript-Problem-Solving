function nonRepeatingChar(str){
    let count = {};

    for (const char of str) {
        count[char] = (count[char] || 0) + 1
    }

    for (let i = 0; i < str.length; i++) {
        if(count[str[i]] === 1){
            return i;
        }
    }
    return -1;
}

console.log(nonRepeatingChar("leetcode"));

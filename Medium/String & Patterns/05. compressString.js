function compressString(str){
    if(str.length === 0)return;

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = 1;

        while(i<str.length-1 && str[i] === str[i+1]){
            count++;
            i++;
        }
        result += char + count;
        
    }
    return result;
}

console.log(compressString("aabcccccaaa"));

function palindrome(str){
    let cleanStr = str.toLowerCase();

    let reverseStr = cleanStr.split("").reverse().join("");

    return cleanStr === reverseStr;
}

console.log(palindrome('madam'));
console.log(palindrome('hello'));

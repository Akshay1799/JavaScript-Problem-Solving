function stringToNumber(str){
    let num = 0;

    for (let i = 0; i < str.length; i++) {
        let digit = str[i] - '0';
        num = num*10 + digit
    }
    console.log(typeof num);
    
    return num;
}

console.log(stringToNumber("123"));

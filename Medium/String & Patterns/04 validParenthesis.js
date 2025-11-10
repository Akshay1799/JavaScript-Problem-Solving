
function isValid(str){
    let stack = [];
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (map[char]) {
            stack.push(char)
        }
        else{
            if(stack.length === 0)return false;
            let lastOpen = stack.pop();
            if(map[lastOpen] !== char) return false;
        }
    }
    return stack.length === 0;
}
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));

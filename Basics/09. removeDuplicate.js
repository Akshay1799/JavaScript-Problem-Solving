function removeDuplicate(arr){
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicate(['1','2','3','3','5','7','7']));

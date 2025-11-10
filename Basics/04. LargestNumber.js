function largestNum(arr){
    let largestNum=[0];

    for (let i = 0; i < arr.length; i++) {
        if(largestNum < arr[i]){
            largestNum = arr[i];
        }
    }
    return largestNum;
}

console.log(largestNum([2, 5, 7, 12, 44]));

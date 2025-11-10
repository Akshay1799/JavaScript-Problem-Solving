// Find missing number

function findMissingNumber(arr){
    let n = arr.length + 1;
    let expectedArr = (n*(n+1))/2;
    let totalSum = arr.reduce((sum, num)=>sum+num,0);
    return expectedArr - totalSum;
}
console.log(findMissingNumber([1,2,4,5]));

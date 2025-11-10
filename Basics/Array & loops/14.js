// find common element from two arrays

function arrayIntersection(arr1, arr2){
    let newArr = new Set(arr1);
    let result = [];

    for (const num of arr2) {
        if (newArr.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(arrayIntersection([1,2,3],[2,3,5]));

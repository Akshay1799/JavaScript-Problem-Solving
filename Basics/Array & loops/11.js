// Rotate array

function rotateArray(arr, k){
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let newIndex = (i+k) % arr.length;
        result[newIndex] = arr[i];
    }
    return result;
}

console.log(rotateArray([2,3,4,5,6],2));

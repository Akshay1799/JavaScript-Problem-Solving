const numbers = [1,2,3,4,5,6];

const customMap = (arr, callback)=>{
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
        
    }
    return newArr;
}

function double(num){
    return num*2
}

const result = customMap(numbers, double)
console.log(numbers);
console.log(result);

 
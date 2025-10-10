const numbers = [1, 2, 3, 4, 5, 6, 7];

const customFilter = (arr, fn)=>{
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const fn = (num)=> num > 3;

const filterValue = customFilter(numbers, fn);
console.log(numbers);
console.log(filterValue);

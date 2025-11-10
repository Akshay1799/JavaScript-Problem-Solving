// Move zeros

function moveZero(arr){
    let nonZero = arr.filter((num)=>num!==0);
    let zero = arr.filter((num)=>num===0);
    return nonZero.concat(zero);
    
}

console.log(moveZero([0,1,0,3,5]));

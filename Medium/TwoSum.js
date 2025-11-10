function twoSum (numbers, target){
    let left = 0;
    let right = numbers.length -1;

    while (left < right) {
        let currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            return [left , right]
        }
        else if(currentSum < target){
            left++;
        }
        else{
            right--;
        }
    }
}

console.log(twoSum([2,7,11,15], 9));

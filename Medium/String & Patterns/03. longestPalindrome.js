
function longestPalindrome(str, left, right){
    let longestPalindrome = '';

    if(str.length === 0)return;

    for (let i = 0; i < str.length; i++) {
        let left = i;
        let right = i;

        while (left>=0 && right<str.length && str[right]===str[left]) {
            if (right-left+1 > longestPalindrome.length) {
                longestPalindrome = str.substring(left, right+1)
            }
            left--;
            right++;
        }
        left = i;
        right= i+1;

        while (left>=0 && right<str.length && str[left]===str[right]) {
            if (right-left+1 > longestPalindrome.length) {
                longestPalindrome = str.substring(left, right+1)
            }
            left--;
            right++
        }

        
    }
    return longestPalindrome
}
console.log(longestPalindrome('babad'));
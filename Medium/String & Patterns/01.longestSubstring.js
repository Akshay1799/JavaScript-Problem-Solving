function subString(str){
  let maxLength = 0;
  let left = 0;
  let charset = new Set();

  for (let right = 0; right < str.length; right++) {
    while (charset.has(str[right])) {
      charset.delete(str[left]);
      left++;
    }
    charset.add(str[right])
    maxLength = Math.max(maxLength, right-left+1)
  }
  return maxLength;
}

console.log(subString('aabcbb'));

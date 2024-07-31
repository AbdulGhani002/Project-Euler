function largestPalindromeProduct(n) {
  let palindrome = [];
  let max = Math.pow(10, n) - 1;
  let min = Math.pow(10, n - 1);
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let product = i * j;
      if (isPalindrome(product)) {
        palindrome.push(product);
      }
    }
  }
  return Math.max(...palindrome);

  return true;
}
function isPalindrome(number) {
  let num = number.toString();
  let reverse = num.split("").reverse().join("");
  return num === reverse;
}
console.log(largestPalindromeProduct(3));

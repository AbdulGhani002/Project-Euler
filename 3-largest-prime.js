function largestPrimeFactor(number) {
  let prime = [];
  let largestPrime;
  for (let i = 2; number > 10 ? i <= Math.sqrt(number) : i <= number; i++) {
    if (number % i == 0 && isPrime(i)) {
      prime.push(i);
    }
  }
  largestPrime = prime[0];
  for (let i = 1; i < prime.length; i++) {
    if (prime[i] > largestPrime) {
      largestPrime = prime[i];
    }
  }
  return largestPrime;
}

function isPrime(number) {
  for (let i = 2; number > 10 ? i < Math.sqrt(number) : i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));

function nthPrime(n) {
  let prime = [2, 3, 5, 7, 11, 13];
  let num = prime.length;

  while (num < n) {
    let latestPrime = prime[prime.length - 1];
    let nextPrime = getNextPrime(latestPrime);
    prime.push(nextPrime);
    num++;
  }
  return prime[n - 1];
}

function getNextPrime(latestPrime) {
  let nextNumber = latestPrime + 1;
  while (!isPrime(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(nthPrime(10));

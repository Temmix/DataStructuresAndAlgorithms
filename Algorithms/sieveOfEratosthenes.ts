/*
This algorithm will first, create a list of array and set everything to be true;
then start checking everything whether is true or not.
This algorithm is very efficient, check it out.
 
Sieve of Eratosthenes: algorithm steps for primes below 121 
(including optimization of starting from prime's square).
In mathematics, the sieve of Eratosthenes is a simple, ancient 
algorithm for finding all prime numbers up to any given limit.
Note: 
If u can get a number by multiplying 2 numbers, then that number is not a prime
*/

function sieveOfEratosthenes(n) {
  if (n < 3) return [false, false];
  const primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }

  const result = [];
  primes.forEach((x, i) => {
    if (x) return result.push(i);
  });
  return result;
}

console.log(sieveOfEratosthenes(49));

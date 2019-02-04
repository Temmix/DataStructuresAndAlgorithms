/*
  Sieve of Eratosthenes: algorithm steps for primes below 121 
  (including optimization of starting from prime's square).
  In mathematics, the sieve of Eratosthenes is a simple, ancient 
  algorithm for finding all prime numbers up to any given limit.
*/

function sieveOfEratosthenes(n) {
  const primes = new Array(n).fill(true); 
  primes[0] = false;
  primes[1] = false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  
  const result = [];
  primes.forEach((x,i) => {
     if(x) return result.push(i);
  }); 
  return result;
}
 
sieveOfEratosthenes(49);

 

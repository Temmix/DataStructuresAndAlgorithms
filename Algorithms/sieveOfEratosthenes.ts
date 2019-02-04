/*
<<<<<<< HEAD
This algorithm will first, create a list of array and set everything to be true;
then start checking everything whether is true or not.
This algorithm is very efficient, check it out.
=======
  Sieve of Eratosthenes: algorithm steps for primes below 121 
  (including optimization of starting from prime's square).
  In mathematics, the sieve of Eratosthenes is a simple, ancient 
  algorithm for finding all prime numbers up to any given limit.
>>>>>>> 51034ad76b7bad47a6dce1ce061ed1c46695c6b2
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

 

/*
This algorithm will first, create a list of array and set everything to be true;
then start checking everything whether is true or not.
This algorithm is very efficient, check it out.
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

 

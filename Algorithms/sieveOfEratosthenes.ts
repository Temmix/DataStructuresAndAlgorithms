function sieveOfEratosthenes(n) {
  const primes = new Array(n).fill(true); 
  primes[0] = false;
  primes[1] = false;
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
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

 

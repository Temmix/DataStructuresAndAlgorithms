// Find the greatest common divisor of both a and b
function greatestCommonDivisor2(a, b) {
  if (b == 0) return a;
  return greatestCommonDivisor(b, a % b);
}

function greatestCommonDivisor(a, b) {
  var divisor = 2,
    greatestDivisor = 1;
  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor2(14, 21));
console.log(greatestCommonDivisor2(69, 169));

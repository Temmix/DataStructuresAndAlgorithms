function swapNumbers(a, b) {
  b = a + b; // 5
  a = b - a; // 5 - 2
  b = b - a; // 5 - 3
  return { a, b };
}

console.log(swapNumbers(2, 3));

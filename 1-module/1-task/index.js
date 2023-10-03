"use strict";

function factorial(n) {
  if (n === 0) return 1;
  let factorial = 1;
  while (n > 0) {
    factorial *= n;
    n--;
  }
  return factorial;
}
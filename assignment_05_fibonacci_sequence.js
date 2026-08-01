// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================

const readlineSync = require('readline-sync');

function printFibonacciTerms(n) {
  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  const terms = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < n; i++) {
    terms.push(first);
    const next = first + second;
    first = second;
    second = next;
  }

  console.log(`Fibonacci sequence: ${terms.join(' ')}`);
}

function isFibonacciNumber(value) {
  if (value < 0) {
    return false;
  }

  let first = 0;
  let second = 1;

  while (first < value) {
    const next = first + second;
    first = second;
    second = next;
  }

  return first === value;
}

function main() {
  const n = readlineSync.questionInt('How many terms? ');
  printFibonacciTerms(n);

  const value = readlineSync.questionInt('Enter a number to check: ');
  if (isFibonacciNumber(value)) {
    console.log(`${value} is a Fibonacci number.`);
  } else {
    console.log(`${value} is NOT a Fibonacci number.`);
  }
}

main();



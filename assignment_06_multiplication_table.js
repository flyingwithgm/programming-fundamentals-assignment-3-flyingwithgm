// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================

const readlineSync = require('readline-sync');

function printSingleTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

function printTablesUpToN(n) {
  for (let table = 1; table <= n; table++) {
    console.log(`\nMultiplication Table for ${table}:`);
    for (let i = 1; i <= 12; i++) {
      console.log(`${table} x ${i} = ${table * i}`);
    }

    if (table < n) {
      console.log('---------------------------');
    }
  }
}

function main() {
  const n = readlineSync.questionInt('Enter a number N: ');

  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  printSingleTable(n);
  printTablesUpToN(n);
}

main();



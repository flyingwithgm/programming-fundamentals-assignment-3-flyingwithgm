// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================

const readlineSync = require('readline-sync');

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  return sum / numbers.length;
}

function calculateMaximum(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function calculateMinimum(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(readlineSync.questionInt(`Enter number ${i + 1}: `));
  }

  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const maximum = calculateMaximum(numbers);
  const minimum = calculateMinimum(numbers);

  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${maximum}`);
  console.log(`Minimum: ${minimum}`);
}

main();



// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const rowInput = readlineSync.question(`Enter row ${i + 1}: `).trim();
    const values = rowInput.split(/\s+/).map(Number);
    matrix.push(values);
  }
  return matrix;
}

function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowText = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowText += matrix[i][j] + (j < matrix[i].length - 1 ? '\t' : '');
    }
    console.log(rowText);
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let col = 0; col < cols; col++) {
    const newRow = [];
    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][col]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

function addMatrices(matrixA, matrixB) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const result = [];
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

function main() {
  console.log('Part A — Transpose Matrix');
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');
  const matrix = readMatrix(rows, cols);
  console.log('Original Matrix:');
  displayMatrix(matrix);
  console.log('Transposed Matrix:');
  displayMatrix(transposeMatrix(matrix));

  console.log('\nPart B — Add Two Matrices');
  const rowsB = readlineSync.questionInt('Enter number of rows for matrix A and B: ');
  const colsB = readlineSync.questionInt('Enter number of columns for matrix A and B: ');
  console.log('Enter matrix A:');
  const matrixA = readMatrix(rowsB, colsB);
  console.log('Enter matrix B:');
  const matrixB = readMatrix(rowsB, colsB);
  console.log('Result of A + B:');
  displayMatrix(addMatrices(matrixA, matrixB));

  console.log('\nPart C — Multiply Two Matrices');
  const rowsA = readlineSync.questionInt('Enter number of rows for matrix A: ');
  const colsA = readlineSync.questionInt('Enter number of columns for matrix A: ');
  const rowsBA = readlineSync.questionInt('Enter number of rows for matrix B: ');
  const colsBA = readlineSync.questionInt('Enter number of columns for matrix B: ');

  if (colsA !== rowsBA) {
    console.log('Error: Number of columns in A must match number of rows in B.');
    return;
  }

  console.log('Enter matrix A:');
  const firstMatrix = readMatrix(rowsA, colsA);
  console.log('Enter matrix B:');
  const secondMatrix = readMatrix(rowsBA, colsBA);
  console.log('Result of A x B:');
  displayMatrix(multiplyMatrices(firstMatrix, secondMatrix));
}

main();


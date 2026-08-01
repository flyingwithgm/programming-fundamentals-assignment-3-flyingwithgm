// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
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


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================

const readlineSync = require('readline-sync');

function addStudent(students) {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');
  const count = readlineSync.questionInt('How many scores? ');

  const scores = [];
  for (let i = 0; i < count; i++) {
    scores.push(readlineSync.questionInt(`Enter score ${i + 1}: `));
  }

  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}

function displayStudents(students) {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('Students:');
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    console.log(`${student.name} | ID: ${student.id} | Scores: ${student.scores.join(', ')} | Average: ${average.toFixed(2)}`);
  }
}

function calculateAverageScore(students) {
  const id = readlineSync.questionInt('Enter student ID: ');

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      const total = students[i].scores.reduce((sum, score) => sum + score, 0);
      const average = total / students[i].scores.length;
      console.log(`${students[i].name}'s average score: ${average.toFixed(2)}`);
      return;
    }
  }

  console.log('Error: Student ID not found.');
}

function main() {
  const students = [];

  while (true) {
    console.log('\n===============================');
    console.log('STUDENT RECORD SYSTEM MENU');
    console.log('===============================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');

    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 1) {
      addStudent(students);
    } else if (choice === 2) {
      displayStudents(students);
    } else if (choice === 3) {
      calculateAverageScore(students);
    } else if (choice === 4) {
      console.log('Goodbye!');
      break;
    } else {
      console.log('Error: Invalid menu choice.');
    }
  }
}

main();



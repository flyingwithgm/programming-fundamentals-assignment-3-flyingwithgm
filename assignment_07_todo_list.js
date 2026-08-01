// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================

const readlineSync = require('readline-sync');

function addTask(tasks) {
  const task = readlineSync.question('Enter task: ');
  tasks.push(task);
  console.log(`Task added: "${task}"`);
}

function viewTasks(tasks) {
  if (tasks.length === 0) {
    console.log('Your tasks list is empty.');
    return;
  }

  console.log('Your Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

function deleteTask(tasks) {
  if (tasks.length === 0) {
    console.log('No tasks to delete.');
    return;
  }

  viewTasks(tasks);
  const taskNumber = readlineSync.questionInt('Enter task number to delete: ');

  if (taskNumber < 1 || taskNumber > tasks.length) {
    console.log('Error: Invalid task number.');
    return;
  }

  const removedTask = tasks.splice(taskNumber - 1, 1)[0];
  console.log(`Task "${removedTask}" has been removed.`);
}

function main() {
  const tasks = [];

  while (true) {
    console.log('\n============================');
    console.log('TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');

    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 1) {
      addTask(tasks);
    } else if (choice === 2) {
      viewTasks(tasks);
    } else if (choice === 3) {
      deleteTask(tasks);
    } else if (choice === 4) {
      console.log('Goodbye!');
      break;
    } else {
      console.log('Error: Invalid menu choice.');
    }
  }
}

main();



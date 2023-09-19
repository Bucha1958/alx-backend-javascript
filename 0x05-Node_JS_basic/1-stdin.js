// Import the readline module to read user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Display a closing message
  console.log('This important software is now closing');

  // Close the readline interface
  rl.close();
});

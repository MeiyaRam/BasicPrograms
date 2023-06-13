const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.question('Enter the first number : ', (answer1) => {
  rl.question('Enter the second number : ', (answer2) => {
      var result = (+answer1) + (+answer2);
      console.log(`The sum of two numbers is ${result}`);
      rl.close();
  });
});
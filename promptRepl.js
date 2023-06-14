const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'TypeHere to Exit or Continue$$> ',
});

rl.prompt();

rl.on('line', (line) => {
  rl.question('What do you think of Node.js? ', (line) => {
  console.log(`Thank you for your valuable feedback: ${line}`);

  rl.prompt();});
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
}); 
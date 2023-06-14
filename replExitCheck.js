const getRandomNo = require('./exportRandomRepl.js');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>',
});

rl.prompt();

rl.on('line', (line) => {
  console.log(line);
  if(line==='.exit')rl.close();
  rl.question('Enter Maximum Number ', (max) => {
    console.log(max);
    rl.question('Enter Minium Number ', (min)=>{
      console.log(min);
    console.log(`Random Number : ${(getRandomNo(max,min))}`);
      rl.prompt();
    });
    });
    
}).on('close', () => {
  process.exit(0);
}); 

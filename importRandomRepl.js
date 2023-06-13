const getRandomNo = require('./exportRandomRepl.js');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.question('Enter Maximum Number ', (max) => {
rl.question('Enter Minium Number ', (min)=>{
console.log(`Random Number : ${(getRandomNo(max,min))}`);
  rl.close();
});
});

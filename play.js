//----------------------------------------------------------
// Required from other modules
const connect = require('./client');
const setupInput = require('./input');
const conColor = require('./globalvar').conColor;
const conLine = require('./globalvar').conLine;
const readline = require('readline');
//----------------------------------------------------------

//----------------------------------------------------------
// Snake Allowable Moves
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
//----------------------------------------------------------

//----------------------------------------------------------
console.clear();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const users = () => {
  rl.question(`${conColor.green}Enter your username initials (max 3 characters)? ${conColor.red}`, (answer) => {
    if (answer.length <= 0 || answer.length > 3) {
      console.log(`${conColor.red}Whoops wrong username. Try Again!${conColor.reset}`);
      users();
    } else {
      let user = answer;
      rl.close();
      console.log(`\n${conLine.halfLineDash(conColor.orange)}`);
      console.log(`${conColor.bright}${conColor.cyan}Connecting ...${conColor.reset}`);
      setupInput(connect(user), user);
    }
  });
};

users();
//----------------------------------------------------------

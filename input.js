const concat_map = require("concat-map");
const net = require("net");
const conColor = require('./globalvar').conColor;
const conLine = require('./globalvar').conLine;

//----------------------------------------------------------
// Snake Allowable Moves
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
//----------------------------------------------------------

// Stores the active TCP connection object.
let connection;

// Handles key strokes
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  // your code here
  if (key === '\u0078' || key === '\u0003') { // x or ctrl-c to exit
    process.stdout.write(`${conLine.centeredHalfLine("Thanks for playing! Disonnecting from Snake.", conColor.red)}`);
    console.log(`\n${conLine.halfLineDash(conColor.orange)}`);
    process.exit();
  }

  if (key === 'w') { // 'w'
    connection.write("Move: up");
  }

  if (key === 'a') { // 'a'
    connection.write("Move: left");
  }

  if (key === 's') { // 's'
    connection.write("Move: down");
  }
  
  if (key === 'd') { // 'd'
    connection.write("Move: right");
  }
  // if (key === '\u0062') {  // 'b'
  //   process.stdout.write('\x07');
  // }
  // if (key > 0 && key < 10) {
  //   //if (key === '\u0033') {  // '3'
  // console.log(`${conColorGreen}     ⏲️ Setting timer for ${key} seconds...${conColorReset}`);
  //   setTimeout(() => {
  //     process.stdout.write(`${'\x07'}${conColorRed} \t🔔 Your ${key} second timer is up! 🔔\n`);
  //   }, (key * 1000));
  // }
};

module.exports = setupInput;
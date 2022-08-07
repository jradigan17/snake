#!/usr/bin/env node
const net = require("net");
const connect = require('./client');

//----------------------------------------------------------
// Snake Allowable Moves
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
//----------------------------------------------------------

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  // your code here
  if (key === '\u0078' || key === '\u0003') { // x or ctrl-c to exit
    process.stdout.write(`\n\n\tThanks for using me, ciao!\n\n`);
    process.exit();
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



//----------------------------------------------------------
setupInput();

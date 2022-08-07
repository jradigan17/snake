//----------------------------------------------------------
// Required from other modules
const net = require("net");
const connect = require('./client');
const setupInput = require('./input');
const conColor = require('./globalvar').conColor;
const conLine = require('./globalvar').conLine;
//----------------------------------------------------------

//----------------------------------------------------------
// Snake Allowable Moves
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
//----------------------------------------------------------





//----------------------------------------------------------
console.log(`\n${conLine.halfLineDash(conColor.orange)}`);
console.log(`${conColor.bright}${conColor.cyan}Connecting ...${conColor.reset}`);
// connect();
setupInput(connect());
//----------------------------------------------------------


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
console.log(`${conColor.orange}${conLine.halfLine}${conColor.reset}`);
console.log(`${conColor.cyan}Connecting ...${conColor.reset}`);
connect();
setupInput();
//----------------------------------------------------------


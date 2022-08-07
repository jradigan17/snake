//----------------------------------------------------------
// Required exports
const concat_map = require("concat-map");
const net = require("net");
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
// Stores the active TCP connection object.
let connection;
//----------------------------------------------------------

//----------------------------------------------------------
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
//----------------------------------------------------------

//----------------------------------------------------------
// Handles user input
const handleUserInput = (key) => {
  // your code here
  if (key === '\u0078' || key === '\u0003') { // x or ctrl-c to exit
    process.stdout.write(`${conLine.centeredHalfLine("Thanks for playing! Disonnecting from Snake.", conColor.red)}`);
    console.log(`\n${conLine.halfLineDash(conColor.orange)}`);
    process.exit();
  }

  // Movement Key Press
  const movement = {
    w : "Move: up",
    a : "Move: left",
    s : "Move: down",
    d : "Move: right",
    action : function(key) {
      for (item in this) {
        if (item === key) {
          connection.write(`${this[item]}`);
        }
      }
    }
  }
  
  movement.action(key);

  // Canned Messages Key Press
  const cannedMessages = {
    n : "Nice Move!",
    c : "Close Call!",
    i : "I Want Cookies!",
    b : "Bring It On!",
    g : "Guinness",
    message : function(key) {
      for (item in this) {
        if (item === key) {
          connection.write(`Say: ${this[item]}`);
        }
      }
    }
  };

  cannedMessages.message(key);
  
};
//----------------------------------------------------------

module.exports = setupInput;
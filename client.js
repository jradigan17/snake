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

//----------------------------------------------------------
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  'localhost', // IP address here,
    port:  50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // What to do on connections
  conn.on("connect", () => {
    console.log(`\t${conColor.green}successfully connected to the game server${conColor.reset}`)
    conn.write("Name: JCR");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write ("Move: up")
    // }, (1000));
    // let numberOfLoops = 5;
    // intervalID = setInterval(() => {
    //   if (numberOfLoops <= 0) {
    //     clearInterval(intervalID)
    //   }
    //   numberOfLoops -= 1;
    //   conn.write ("Move: up")
    // }, 250);
    console.log(`${conColor.orange}${conLine.halfLine}${conColor.reset}`);
  });

  // 
  conn.on("data", (data) => {
    console.log(`${conColor.cyan}Server says: ${data}${conColor.reset}`);
  });

  return conn;
};
//----------------------------------------------------------


//----------------------------------------------------------
// Export Connect Function 
module.exports = connect
//----------------------------------------------------------

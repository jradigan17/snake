const net = require("net");

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
    console.log(`successfully connected to the game server`)
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
  });

  // 
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
//----------------------------------------------------------

//----------------------------------------------------------
// Export Connect Function
module.exports = connect

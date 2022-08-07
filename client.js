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
    console.log(`${conColor.bright}${conLine.centeredHalfLine("Success! Connected to the game server.", conColor.cyan)}`);
    conn.write("Name: JCR");
    console.log(`${conColor.bright}${conLine.centeredHalfLine("Welcome to...", conColor.cyan)}`);
    console.log(`${conColor.magenta} .----------------.  .-----------------. .----------------.  .----------------.  .----------------. `);
    console.log(`| ${conColor.orange}.--------------. ${conColor.magenta}|| ${conColor.orange}.--------------. ${conColor.magenta}|| ${conColor.orange}.--------------. ${conColor.magenta}|| ${conColor.orange}.--------------. ${conColor.magenta}|| ${conColor.orange}.--------------. ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}|   ${conColor.green} _______   ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}____  _____  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|     ${conColor.green} __      ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|  ${conColor.green}___  ____   ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|  ${conColor.green}_________   ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}|   ${conColor.green}/  ___  |  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|${conColor.green}|_   \\|_   _| ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}    /  \\     ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}|_  ||_  _|  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}|_   ___  |  ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`|${conColor.orange} |  ${conColor.green}|  (__ \\_| ${conColor.orange} | ${conColor.magenta}|| ${conColor.orange}|  ${conColor.green}|   \\ | |   ${conColor.orange}| ${conColor.magenta}||${conColor.orange} |   ${conColor.green} / /\\ \\   ${conColor.orange} | ${conColor.magenta}|| ${conColor.orange}|   ${conColor.green}| |_/ /    ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|   ${conColor.green}| |_  \\_|  ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}|   ${conColor.green}'.___\`-.  ${conColor.orange} | ${conColor.magenta}|| ${conColor.orange}| ${conColor.green} | |\\ \\| |   ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}  / \____ \\  ${conColor.orange} | ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}  |  __'.    ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|  ${conColor.green} |  _|  _   ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}| ${conColor.green} |\\____)  | ${conColor.orange} | ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}_| |_\\   |_  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}_/ /    \\ \\_ ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green} _| |  \\ \\_  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|  ${conColor.green}_| |___/ |  ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}| ${conColor.green} |_______.'  ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}|${conColor.green}|_____|\\____| ${conColor.orange}|${conColor.magenta} || ${conColor.orange}|${conColor.green}|____|  |____|${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}|____||____| ${conColor.orange}| ${conColor.magenta}|| ${conColor.orange}| ${conColor.green}|_________|  ${conColor.orange}| ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}|              | ${conColor.magenta}|| ${conColor.orange}|              | ${conColor.magenta}|| ${conColor.orange}|              | ${conColor.magenta}||${conColor.orange} |              | ${conColor.magenta}|| ${conColor.orange}|              | ${conColor.magenta}|`);
    console.log(`| ${conColor.orange}'--------------' ${conColor.magenta}|| ${conColor.orange}'--------------' ${conColor.magenta}|| ${conColor.orange}'--------------' ${conColor.magenta}|| ${conColor.orange}'--------------' ${conColor.magenta}|| ${conColor.orange}'--------------' ${conColor.magenta}|`);
    console.log(` '----------------'  '----------------'  '----------------'  '----------------'  '----------------' `);
    console.log(`${conColor.cyan}${conColor.bright}Enjoy your game JCR!${conColor.reset}\n`);
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
    console.log(`${conColor.cyan}Server says: ${data}${conColor.reset}`);
  });

  return conn;
};
//----------------------------------------------------------


//----------------------------------------------------------
// Export Connect Function 
module.exports = connect
//----------------------------------------------------------

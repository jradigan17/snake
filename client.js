//----------------------------------------------------------
// Required exports
const net = require("net");
const conColor = require('./globalvar').conColor;
const conLine = require('./globalvar').conLine;
const { IP, PORT } = require("./constants");
const {cannedMessages} = require('./constants');
//----------------------------------------------------------

//----------------------------------------------------------
// Snake Allowable Moves
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
//----------------------------------------------------------

//----------------------------------------------------------
// establishes a connection with the game server
const connect = function(user) {
  const conn = net.createConnection({
    host:  IP, // IP address here,
    port:  PORT // PORT number here,
  });

  conn.on('error', (errorCode) => {
    console.log(`${conColor.red}  GAME START ERROR: ${errorCode}${conColor.reset}`);
    console.log(`${conColor.cyan}${conColor.bright}     (did you forget to start the game server, perhaps?)${conColor.reset}\n`);
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // What to do on connections
  conn.on("connect", () => {
    console.log(`${conColor.bright}${conLine.centeredHalfLine("Success! Connected to the game server.", conColor.cyan)}`);
    conn.write(`Name: ${user}`);
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
    console.log(`${conColor.cyan}${conColor.bright}Enjoy your game ${user}!\n`);
    console.log(`${conColor.magenta}Move: ${conColor.orange}w${conColor.magenta} = Up | ${conColor.orange}a${conColor.magenta} - Left | ${conColor.orange}d${conColor.magenta} - Right | ${conColor.orange}s${conColor.magenta} - Down | ${conColor.orange}x${conColor.magenta} = Exit\n`);
    console.log(`${conColor.yellow}Don't forget you can send other players messages!`);
    console.log(`Key:\tMessage:`);
    for (let item in cannedMessages) {
      console.log(`${conColor.yellow}${conColor.italics} ${item}\t${cannedMessages[item]}${conColor.reset}`);
    }
  });

  // Receive client write from server
  conn.on("data", (data) => {
    console.log(`\n${conColor.cyan}Server says: ${data}${conColor.reset}`);
  });

  return conn;
};
//----------------------------------------------------------


//----------------------------------------------------------
// Export Connect Function
module.exports = connect;
//----------------------------------------------------------

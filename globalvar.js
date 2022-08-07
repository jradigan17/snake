//----------------------------------------------------------
//Global Variable Color List
const conColor = {
  cyan : "\x1b[36m",
  red : '\x1b[31m',
  green : '\x1b[92m',
  grey : '\x1b[90m',
  reset : "\x1b[0m",
  magenta : `\x1b[95m`,
  orange : "\u001b[38;5;208m",
  yellow : '\x1b[93m',
  bright : "\x1b[1m", 
  dim : "\x1b[2m", 
  italics : "\x1b[3m",
  reverse : "\x1b[7m"
};

const conLine = {
  fullLine : '-'.repeat(process.stdout.columns),
  halfLine : '-'.repeat((process.stdout.columns) / 2)
};
// -------------------------------------------

module.exports = {conColor, conLine};

const { COMMANDS } = require("./constants");

let connection;

const handleUserInput = function(key) {
  // terminate on ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
  connection.write(COMMANDS[key]);
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
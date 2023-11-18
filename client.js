const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected!")
    conn.write("Name: AAA"); // send client name
  });

  conn.on("data", (data) => {
    console.log(data); // log data received from server
  });

  return conn;
};

module.exports = connect;
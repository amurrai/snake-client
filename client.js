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

  // confirm successful connection and send client name to server
  conn.on("connect", (data) => {
    console.log("Successfully connected!")
    conn.write("Name: AAA"); 
  });

  // log data received from server
  conn.on("data", (data) => {
    console.log(data); 
  });

  return conn;
};

module.exports = connect;
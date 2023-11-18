const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: AAA");
    conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: up");
    }, 50);    

  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;
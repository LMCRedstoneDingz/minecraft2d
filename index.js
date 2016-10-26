var http = require("http").createServer(handler);
var io = require("socket.io")(http);

function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

io.on("connection", function(socket) {
  // Socket Joined
  socket.on("ping", function(message) {
    socket.emit("pong", message);
  });
  socket.on("disconnect", function() {
    // Socket Left
  });
});

http.listen(process.env.PORT, function() {
  console.log("Listening to *:9001");
});

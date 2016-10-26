var http = require("http").createServer();
var io = require("socket.io")(http);

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

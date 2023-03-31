const server = require("http").createServer();
const socketio = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

let readyPlayerCount = 0;

socketio.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  socket.on('ready', () => {
    console.log(`Player ${socket.id} is ready`);
    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      socketio.emit('startGame', socket.id);
    }
  })
});

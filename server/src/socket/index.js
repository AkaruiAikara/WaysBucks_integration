const socketIo = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
  });
};

module.exports = socketIo;

// import dotenv
require("dotenv").config();
// import express
const express = require("express");
// import http
const http = require("http");
// import socketio
const { Server } = require("socket.io");
// import connection as db
const db = require("./src/database/connection");
// import cors
const cors = require("cors");
// get routes
const router = require("./src/routes");
// port
const port = process.env.PORT || 5000;
// create express app
const app = express();
// use json
app.use(express.json());
// use cors
app.use(cors());
// use routes
app.use("/api/v1", router);
// use uploads directory to serve static files
app.use("/uploads", express.static("uploads"));
// testing database connection
db.authenticate();
// create http server
const server = http.createServer(app);
// create socket server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
// use socket.io
require("./src/socket")(io);
// listen to port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

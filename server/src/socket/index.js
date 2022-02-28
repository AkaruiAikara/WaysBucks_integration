// import required models
const { Chat, User } = require("../../models");
// import jwt
const jwt = require("jsonwebtoken");
// import Operator from sequelize
const { Op } = require("sequelize");

const connectedUsers = {};
const socketIo = (io) => {
  io.use((socket, next) => {
    if (socket.handshake.auth && socket.handshake.auth.token) {
      next();
    } else {
      next(new Error("Authentication error"));
    }
  });
  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    // verify token
    const { token } = socket.handshake.auth;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // get user id from token
    const userId = decoded.id;
    // add user to connected users
    connectedUsers[userId] = socket.id;
    console.log(connectedUsers);
    // load contacts
    socket.on("load all contacts", async () => {
      try {
        const contacts = await User.findAll({
          include: [
            {
              model: Chat,
              as: "recipientMessage",
              attributes: ["id", "message", "createdAt"],
            },
            {
              model: Chat,
              as: "senderMessage",
              attributes: ["id", "message", "createdAt"],
            },
          ],
          attributes: ["id", "fullName", "email", "image"],
        });
        contacts.map((contact) => {
          if (contact.image) {
            contact.image = process.env.FILE_PATH + contact.image;
          }
          return contact;
        });
        socket.emit("all contacts", contacts);
      } catch (err) {
        console.log(err);
      }
    });

    // load admin contacts
    socket.on("load admin contacts", async () => {
      try {
        const contacts = await User.findAll({
          include: [
            {
              model: Chat,
              as: "recipientMessage",
              attributes: ["id", "message", "createdAt"],
            },
            {
              model: Chat,
              as: "senderMessage",
              attributes: ["id", "message", "createdAt"],
            },
          ],
          where: {
            isAdmin: 1,
          },
          attributes: ["id", "fullName", "email", "image"],
        });
        contacts.map((contact) => {
          if (contact.image) {
            contact.image = process.env.FILE_PATH + contact.image;
          }
          return contact;
        });
        socket.emit("admin contacts", contacts);
      } catch (err) {
        console.log(err);
      }
    });

    // send message
    socket.on("send message", async (data) => {
      try {
        const { message, recipientId } = data;
        const senderId = decoded.id;
        const chat = await Chat.create({
          message,
          senderId,
          recipientId,
        });
        const sender = await User.findOne({
          where: {
            id: senderId,
          },
          attributes: ["id", "fullName", "email", "image"],
        });
        const recipient = await User.findOne({
          where: {
            id: recipientId,
          },
          attributes: ["id", "fullName", "email", "image"],
        });
        if (sender.image) {
          sender.image = process.env.FILE_PATH + sender.image;
        }
        if (recipient.image) {
          recipient.image = process.env.FILE_PATH + recipient.image;
        }
        const dataSent = {
          chat,
          sender,
          recipient,
        };
        socket
          .to(socket.id)
          .to(connectedUsers[recipientId])
          .emit("message received", dataSent);
      } catch (err) {
        console.log(err);
      }
    });

    // load messages
    socket.on("load messages", async (id) => {
      try {
        const recipientId = id;
        const senderId = decoded.id;
        const chats = await Chat.findAll({
          where: {
            [Op.or]: [
              {
                senderId,
                recipientId,
              },
              {
                senderId: recipientId,
                recipientId: senderId,
              },
            ],
          },

          include: [
            {
              model: User,
              as: "sender",
              attributes: ["id", "fullName", "email"],
            },
            {
              model: User,
              as: "recipient",
              attributes: ["id", "fullName", "email"],
            },
          ],
          attributes: ["id", "message", "createdAt"],
        });
        socket.emit("messages loaded", chats);
      } catch (err) {
        console.log(err);
      }
    });

    // disconnect
    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
      // remove user from connected users
      delete connectedUsers[userId];
    });
  });
};

module.exports = socketIo;

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { io } from "socket.io-client";

import avatar from "../../assets/img/avatar.jpg";

let socket;

export default function ChatBox() {
  const [state, dispatch] = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isReceived, setIsReceived] = useState(false);
  const [notif, setNotif] = useState(null);
  useEffect(() => {
    if (state.user) {
      socket = io("http://localhost:5000", {
        auth: {
          token: state.user.token,
        },
      });
      loadContacts();
      socket.on("connect_error", (err) => {
        console.error(err.message);
      });
    }
    return () => {
      socket.disconnect();
      setContacts([]);
      setContact(null);
    };
  }, [isOpen]);
  useEffect(() => {
    if (socket) {
      socket.emit("messages loaded", contact?.id);
      const chatMsgElm = document.getElementById("chat-messages");
      socket.on("message received", (data) => {
        if (data.sender.id === contact?.id) {
          socket.emit("load messages", contact.id);
          socket.on("messages loaded", (data) => {
            setMessages(data);
          });
        }
        setIsReceived(true);
        setNotif(data);
        setTimeout(() => {
          setNotif(null);
        }, 5000);
      });
      if (chatMsgElm) {
        chatMsgElm.scrollTop = chatMsgElm.scrollHeight;
      }
    }
  }, [messages]);
  // load contacts function with socket
  const loadContacts = () => {
    setIsReceived(false);
    if (state.user.isAdmin) {
      socket.emit("load all contacts");
      socket.on("all contacts", (data) => {
        data.map((contact) => {
          contact.message = "Click here to start chat";
          return contact;
        });
        setContacts(data);
      });
    } else {
      socket.emit("load admin contacts");
      socket.on("admin contacts", (data) => {
        data.map((contact) => {
          contact.message = "Click here to start chat";
          return contact;
        });
        setContacts(data);
      });
    }
  };
  // clicked on contact
  const onClickContact = (contact) => {
    setContact(null);
    setContact(contact);
    socket.emit("load messages", contact.id);
    socket.on("messages loaded", (data) => {
      setMessages(data);
    });
  };
  // handle input message change
  const handleInputMessageChange = (e) => {
    setInputMessage(e.target.value);
  };
  // handle send message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      socket.emit("send message", {
        message: inputMessage,
        recipientId: contact.id,
      });
      setInputMessage("");
      setTimeout(() => {
        socket.emit("load messages", contact.id);
      }, 200);
    }
  };
  return state.isLogin ? (
    isOpen ? (
      <div className="sticky left-[88%] bottom-0 flex flex-row shadow-2xl shadow-red-600 bg-white w-[768px] h-[512px] rounded-lg">
        <div className="flex-shrink flex flex-col h-full gap-2 rounded-tl-lg rounded-bl-lg bg-red-100 w-[256px] py-3">
          {contacts.map((item) =>
            item.id === state.user.id ? null : (
              <div
                key={item.id}
                onClick={() => onClickContact(item)}
                className={`${
                  contact && contact.id === item.id ? "active" : ""
                } cursor-pointer flex flex-row gap-2 p-2 mx-2 my-1 hover:bg-red-200 rounded-xl`}
              >
                <img
                  className="w-[48px] h-[48px] object-cover rounded-full"
                  src={item.image || avatar}
                  alt="avatar"
                />
                <div>
                  <p className="text-md font-bold">{item.fullName}</p>
                  <p className="text-sm text-gray-500">{item.message}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex-grow w-[512px]">
          {contact ? (
            <>
              <div className="flex flex-row h-[15%] justify-between bg-red-200 rounded-tr-lg">
                <div className="flex flex-row items-center">
                  <img
                    className="w-[54px] h-[54px] object-cover rounded-full ml-4"
                    src={contact.image || avatar}
                    alt="avatar"
                  />
                  <p className="text-md font-bold px-4">{contact.fullName}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-red-300 mb-auto rounded-lg group hover:bg-red-700"
                >
                  <i className="bi bi-caret-down group-hover:text-white"></i>
                </button>
              </div>
              <div
                className="h-[75%] overflow-y-auto flex flex-col"
                id="chat-messages"
              >
                {messages &&
                  messages.map((item) => (
                    <div
                      key={item.id}
                      className={`mx-3 my-4 p-2 inline-block ${
                        item.sender.id === state.user.id
                          ? "place-self-end rounded-tl-xl rounded-br-xl rounded-bl-xl bg-red-700 text-white"
                          : "place-self-start rounded-tr-xl rounded-br-xl rounded-bl-xl bg-red-100"
                      }`}
                    >
                      {item.message}
                    </div>
                  ))}
              </div>
              <form onSubmit={handleSendMessage}>
                <div className="flex flex-row items-center gap-2 h-[10%] px-4">
                  <input
                    className="flex-grow border-0 bg-red-50 rounded-lg px-4 py-2 focus:outline-none"
                    placeholder="Type your message"
                    name="message"
                    value={inputMessage}
                    onChange={handleInputMessageChange}
                  />
                  <button className="flex-shrink w-[40px] h-[40px] bg-red-600 rounded-full hover:bg-red-900">
                    <i className="bi bi-send text-white"></i>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-row justify-end rounded-tr-lg">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-300 mb-auto rounded-lg group hover:bg-red-700"
              >
                <i className="bi bi-caret-down group-hover:text-white"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    ) : (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="sticky left-[88%] bottom-0 flex flex-row justify-center gap-4 z-10 rounded-md bg-red-700 shadow-xl w-[120px] py-2"
        >
          <i className="bi bi-chat-dots-fill text-white"></i>
          <h4 className="text-xl text-white">Chats</h4>
          {isReceived && (
            <span className="absolute -top-[2px] -right-[2px] inline-flex h-2 w-2 rounded-full bg-red-300"></span>
          )}
        </button>
        {notif && (
          <div className="sticky right-0 bottom-4">
            <div
              id="toast-message-cta"
              className="p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:text-gray-400"
              role="alert"
            >
              <div className="flex">
                <img
                  className="w-8 h-8 rounded-full shadow-lg"
                  src={notif.sender.image ?? avatar}
                  alt="avatar"
                />
                <div className="ml-3 text-sm font-normal">
                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {notif.sender.fullName}
                  </span>
                  <div className="mb-2 text-sm font-normal">
                    {notif.chat.message}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setNotif(null)}
                  className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-collapse-toggle="toast-message-cta"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  ) : null;
}

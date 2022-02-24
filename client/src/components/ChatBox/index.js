import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { io } from "socket.io-client";

let socket;

export default function ChatBox() {
  const [state, dispatch] = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    socket = io("http://localhost:5000");

    return () => {
      socket.disconnect();
    };
  });
  return state.isLogin ? (
    isOpen ? (
      <div className="sticky left-[88%] bottom-0 flex flex-row"></div>
    ) : (
      <button className="sticky left-[88%] bottom-0 flex flex-row justify-center gap-4 z-10 rounded-md bg-red-700 shadow-xl w-[120px] py-2">
        <i className="bi bi-chat-dots-fill text-white"></i>
        <h4 className="text-xl text-white">Chats</h4>
      </button>
    )
  ) : null;
}

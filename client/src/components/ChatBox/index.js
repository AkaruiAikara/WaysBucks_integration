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
      <div className="sticky left-[88%] bottom-0 flex flex-row shadow-2xl shadow-red-600 bg-white w-[768px] h-[512px] rounded-lg">
        <div className="flex-shrink flex flex-col h-full gap-2 rounded-tl-lg rounded-bl-lg bg-red-100 w-[256px]">
          <div className="cursor-pointer flex flex-row gap-2 p-2 mx-2 my-3 hover:bg-red-200 rounded-xl">
            <img
              className="w-[48px] h-[48px] object-cover rounded-full"
              src={state.user.image}
              alt="avatar"
            />
            <div>
              <p className="text-md font-bold">{state.user.fullName}</p>
              <p className="text-sm text-gray-500">this is message</p>
            </div>
          </div>
        </div>
        <div className="flex-grow w-[512px]">
          <div className="flex flex-row h-[15%] justify-between bg-red-200 rounded-tr-lg">
            <div className="flex flex-row items-center">
              <img
                className="w-[54px] h-[54px] object-cover rounded-full ml-4"
                src={state.user.image}
                alt="avatar"
              />
              <p className="text-md font-bold px-4">{state.user.fullName}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-300 mb-auto rounded-lg group hover:bg-red-700"
            >
              <i className="bi bi-caret-down group-hover:text-white"></i>
            </button>
          </div>
          <div className="h-[75%] overflow-y-auto flex flex-col">
            <div className="mx-3 my-4 place-self-start rounded-tr-xl rounded-br-xl rounded-bl-xl p-2 bg-red-100 inline-block">
              Ini Pesan bang
            </div>
            <div className="mx-3 my-4 place-self-end rounded-tl-xl rounded-br-xl rounded-bl-xl p-2 bg-red-700 text-white inline-block">
              Iya bang, ini pesan juga
            </div>
            <div className="mx-3 my-4 place-self-start rounded-tr-xl rounded-br-xl rounded-bl-xl p-2 bg-red-100 inline-block">
              Ini Pesan bang
            </div>
            <div className="mx-3 my-4 place-self-start rounded-tr-xl rounded-br-xl rounded-bl-xl p-2 bg-red-100 inline-block">
              Ini Pesan bang
            </div>
            <div className="mx-3 my-4 place-self-end rounded-tl-xl rounded-br-xl rounded-bl-xl p-2 bg-red-700 text-white inline-block">
              Iya bang, ini pesan juga
            </div>
            <div className="mx-3 my-4 place-self-end rounded-tl-xl rounded-br-xl rounded-bl-xl p-2 bg-red-700 text-white inline-block">
              Iya bang, ini pesan juga
            </div>
            <div className="mx-3 my-4 place-self-end rounded-tl-xl rounded-br-xl rounded-bl-xl p-2 bg-red-700 text-white inline-block">
              Iya bang, ini pesan juga
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 h-[10%] px-4">
            <input
              className="flex-grow border-0 bg-red-50 rounded-lg px-4 py-2 focus:outline-none"
              placeholder="Type your message"
            />
            <button className="flex-shrink w-[40px] h-[40px] bg-red-600 rounded-full hover:bg-red-900">
              <i className="bi bi-send text-white"></i>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <button
        onClick={() => setIsOpen(true)}
        className="sticky left-[88%] bottom-0 flex flex-row justify-center gap-4 z-10 rounded-md bg-red-700 shadow-xl w-[120px] py-2"
      >
        <i className="bi bi-chat-dots-fill text-white"></i>
        <h4 className="text-xl text-white">Chats</h4>
      </button>
    )
  ) : null;
}

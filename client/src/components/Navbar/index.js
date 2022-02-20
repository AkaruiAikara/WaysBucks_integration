import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { API } from "../../config/api";

import Dropdown from "../Dropdown";
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.jpg";
import shopbasket from "../../assets/img/shopbasket.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const location = useLocation();
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
      <div className="flex flex-wrap justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {state.isLogin ? (
          <ul className="flex justify-end items-center space-x-12">
            <li>
              <Link to="cart">
                <img src={shopbasket} alt="avatar" />
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={() => {
                    setIsOpen(() => {
                      return isOpen ? false : true;
                    });
                  }}
                >
                  <img
                    className="w-[60px] h-[60px] object-cover rounded-full border-2 border-blood"
                    src={state.user.image ?? avatar}
                    alt="avatar"
                  />
                </button>
                {isOpen ? <Dropdown /> : null}
              </div>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end space-x-2">
            <li>
              <Link
                to={location.pathname + "?a=login"}
                className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={location.pathname + "?a=register"}
                className="text-white font-product bg-blood border-solid border-2 border-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800"
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

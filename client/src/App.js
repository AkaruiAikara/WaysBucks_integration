import "./App.css";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Modal from "react-modal";

import Navbar from "./components/Navbar";
import ModalAuth from "./components/ModalAuth";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Transaction from "./pages/Transaction";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddToping";

Modal.setAppElement("#root");

// If token is in localStorage, set it as default header
if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

export default function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  // Redirect Auth
  useEffect(() => {
    if (!state.isLogin) {
      navigate("/?a=login");
    } else {
      if (state.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [state]);

  // Create function for check user token
  const checkToken = () => {
    if (localStorage.getItem("token")) {
      API.get("/check-auth")
        .then((res) => {
          // Get user data
          let payload = res.data.data;
          // Get token from localStorage and set it to payload
          payload.token = localStorage.getItem("token");
          dispatch({
            type: "LOGIN",
            payload,
          });
        })
        .catch((err) => {
          localStorage.removeItem("token");
          dispatch({
            type: "LOGOUT",
          });
        });
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div className="container mx-auto my-6">
      <ModalAuth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-topping" element={<AddTopping />} />
      </Routes>
    </div>
  );
}

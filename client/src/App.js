import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Modal from 'react-modal';

import Navbar from './components/Navbar';
import ModalAuth from './components/ModalAuth';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Transaction from './pages/Transaction';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import AddTopping from './pages/AddToping';

Modal.setAppElement('#root');

export default function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  });
  return (
    <div className="container mx-auto my-6">
      <ModalAuth isLogin={isLogin} setIsLogin={setIsLogin} />
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="detail" element={<Detail isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="cart" element={<Cart isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="transaction" element={<Transaction isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="profile" element={<Profile isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="add-product" element={<AddProduct isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="add-topping" element={<AddTopping isLogin={isLogin} setIsLogin={setIsLogin}/>} />
      </Routes>
    </div>
  )
}

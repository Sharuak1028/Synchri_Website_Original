import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TradingBots from './Components/ProductPage';
import FeaturesPage from './Components/FeaturePage';
import CartPage from './Components/CartPage';
import Navbar from './Components/Navbar';
import './index.css';

export default function App() {
  const [cart, setCart] = useState([]);
const handleUpdateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return; // Prevent 0 or negative items
  setCart(prevCart => 
    prevCart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
    </>
  );
}

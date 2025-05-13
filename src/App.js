import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./component/productList";
import Cart from "./component/cart";
import { useSelector } from "react-redux";
import './App.css'; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <nav className="navbar"> 
         <div className="site-name">🌟 GlamCart</div>
         <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/cart" className="link">
          🛒 Cart ({totalQuantity})
        </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;

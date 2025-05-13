import React from "react";
import "./productList.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlices";
import { toast } from "react-toastify";

const products = [
  { id: 1, name: "Lipstick", price: 399.0, image: "/images/Lipstick.png" },
  { id: 2, name: "Compact Powder", price: 299.0, image: "/images/CompactPowder.png" },
  { id: 3, name: "Concealer", price: 399.0, image: "/images/Concealer.jpg" },
  { id: 4, name: "Eye Shadow", price: 599.0, image: "/images/Eyeshadow.jpg" },
  { id: 5, name: "Foundation", price: 699.0, image: "/images/Foundation.png" },
  { id: 6, name: "Blush", price: 499.0, image: "/images/Blush.jpg" },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list-container">
      <img src="/images/Cover.jpg" alt="Cover" className="cover-image" />
      <h1 className="product-heading">Our Products</h1>
      
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
